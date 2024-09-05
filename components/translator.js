const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    translate(text, locale) {
        let textArr = text.split(" ");
/*        const arr = Object.keys(britishOnly);
        console.log(arr);
        let maxWords = 0;
        for (let x = 0; x < arr.length; x++) {
            const innerArr = arr[x].split(" ");
            if (innerArr.length > maxWords) {maxWords = innerArr.length;}
        }
        console.log(maxWords);
*/        if (locale == "american-to-british") {
            for (let i = 0; i < textArr.length; i++) {
                let regex = /[\.\?!,]$/;
                let word = textArr[i].toLowerCase();
                let word2 = '';
                let word3 = '';
                let end = '';
                if (regex.test(word)) {
                    end = word.slice(-1);
                    word = word.slice(0, -1);
                }
                if (i > 0) {word2 = textArr[i - 1].toLowerCase() + " " + word;}
                //console.log(word2);
                if (i > 1) {word3 = textArr[i - 2].toLowerCase() + " " + word2;}
                //console.log(word3);
                if (Object.keys(americanOnly).includes(word)) {textArr[i] = `<span class="highlight">${americanOnly[word]}</span>${end}`;}
                if (i > 0 && Object.keys(americanOnly).includes(word2)) {
                    console.log(word2);
                    textArr.splice(i - 1, 2, `<span class="highlight">${americanOnly[word2]}</span>${end}`);
                    i = 0;
                }
                if (i > 1 && Object.keys(americanOnly).includes(word3)) {
                    console.log(word3);
                    textArr.splice(i - 2, 3, `<span class="highlight">${americanOnly[word3]}</span>${end}`);
                    i = 0;
                }
                if (Object.keys(americanToBritishSpelling).includes(word)) {textArr[i] = `<span class="highlight">${americanToBritishSpelling[word]}</span>${end}`;}
                if (Object.keys(americanToBritishTitles).includes(word + '.')) {
                    let temp = `<span class="highlight">${americanToBritishTitles[word + '.']}</span>`;
                    console.log(temp[0].toUpperCase());
                    textArr[i] = temp.slice(0, 24) + temp[24].toUpperCase() + temp.slice(25);
                }
                const timeRegex = /^[1-2]?[0-9]:[0-5][0-9]$/
                if (timeRegex.test(word)) {textArr[i] = `<span class="highlight">${word.replace(":", ".")}</span>${end}`;}
            }
        } else if (locale == "british-to-american") {
            for (let i = 0; i < textArr.length; i++) {
                let regex = /[\.\?!,]$/;
                let word = textArr[i].toLowerCase();
                let word2 = '';
                let word3 = '';
                let end1 = '';
                let end2 = '';
                let end3 = '';
                if (regex.test(word)) {
                    end1 = word.slice(-1);
                    word = word.slice(0, -1);
                }
                if (textArr.length - i > 1) {
                    word2 = word + " " + textArr[i + 1].toLowerCase();
                    if (regex.test(word2)) {
                        end2 = word2.slice(-1);
                        word2 = word2.slice(0, -1);
                    }
                }
                //console.log(word2);
                if (textArr.length - i > 2) {
                    word3 = word2 + " " + textArr[i+2].toLowerCase();
                    if (regex.test(word3)) {
                        end3 = word3.slice(-1);
                        word3 = word3.slice(0, -1);
                    }
                }
                const timeRegex = /^[1-2]?[0-9]\.[0-5][0-9]$/
                //console.log(word3);
                if (textArr.length - i > 2 && Object.keys(britishOnly).includes(word3)) {
                    console.log(word3);
                    textArr.splice(i, 3, `<span class="highlight">${britishOnly[word3]}</span>${end3}`);
                } else if (textArr.length - i > 1 && Object.keys(britishOnly).includes(word2)) {
                    console.log(word2);
                    textArr.splice(i, 2, `<span class="highlight">${britishOnly[word2]}</span>${end2}`);
                } else if (Object.keys(britishOnly).includes(word)) {
                    textArr[i] = `<span class="highlight">${britishOnly[word]}</span>${end1}`;
                } else if (Object.values(americanToBritishSpelling).includes(word)) {
                    textArr[i] = `<span class="highlight">${Object.keys(americanToBritishSpelling).find(e => americanToBritishSpelling[e] === word)}</span>${end1}`;
                } else if (Object.values(americanToBritishTitles).includes(word)) {
                    let temp = `<span class="highlight">${Object.keys(americanToBritishTitles).find(e => americanToBritishTitles[e] === word)}</span>`;
                    textArr[i] = temp.slice(0, 24) + temp[24].toUpperCase() + temp.slice(25);
                } else if (timeRegex.test(word)) {textArr[i] = `<span class="highlight">${word.replace(".", ":")}</span>${end1}`;}
            }
        }
        if (textArr.join(" ") === text) {
            return "Everything looks good to me!";
        } else {
            return textArr.join(" ");
        }
    } 
}

module.exports = Translator;