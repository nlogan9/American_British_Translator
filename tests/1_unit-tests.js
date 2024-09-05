const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator();

suite('Unit Tests', () => {
    test('Translate Mangoes are my favorite fruit.', function() {
        assert.equal('Mangoes are my <span class="highlight">favourite</span> fruit.', translator.translate('Mangoes are my favorite fruit.', 'american-to-british'))
    });

    test('Translate I ate yogurt for breakfast.', function() {
        assert.equal('I ate <span class="highlight">yoghurt</span> for breakfast.', translator.translate('I ate yogurt for breakfast.', 'american-to-british'))
    });

    test("Translate We had a party at my friend's condo.", function() {
        assert.equal('We had a party at my friend\'s <span class="highlight">flat</span>.', translator.translate("We had a party at my friend's condo.", 'american-to-british'))
    });

    test("Translate Can you toss this in the trashcan for me?", function() {
        assert.equal('Can you toss this in the <span class="highlight">bin</span> for me?', translator.translate("Can you toss this in the trashcan for me?", 'american-to-british'))
    });

    test("Translate The parking lot was full. ", function() {
        assert.equal('The <span class="highlight">car park</span> was full.', translator.translate("The parking lot was full.", 'american-to-british'))
    });

    test("Translate Like a high tech Rube Goldberg machine.", function() {
        assert.equal('Like a high tech <span class="highlight">Heath Robinson device</span>.', translator.translate("Like a high tech Rube Goldberg machine.", 'american-to-british'))
    });

    test("Translate To play hooky means to skip class or work.", function() {
        assert.equal('To <span class="highlight">bunk off</span> means to skip class or work.', translator.translate("To play hooky means to skip class or work.", 'american-to-british'))
    });

    test("Translate No Mr. Bond, I expect you to die.", function() {
        assert.equal('No <span class="highlight">Mr</span> Bond, I expect you to die.', translator.translate("No Mr. Bond, I expect you to die.", 'american-to-british'))
    });

    test("Translate Dr. Grosh will see you now.", function() {
        assert.equal('<span class="highlight">Dr</span> Grosh will see you now.', translator.translate("Dr. Grosh will see you now.", 'american-to-british'))
    });

    test("Translate Lunch is at 12:15 today.", function() {
        assert.equal('Lunch is at <span class="highlight">12.15</span> today.', translator.translate("Lunch is at 12:15 today.", 'american-to-british'))
    });

    test("Translate We watched the footie match for a while.", function() {
        assert.equal('We watched the <span class="highlight">soccer</span> match for a while.', translator.translate("We watched the footie match for a while.", 'british-to-american'))
    });

    test("Translate Paracetamol takes up to an hour to work.", function() {
        assert.equal('<span class="highlight">Tylenol</span> takes up to an hour to work.', translator.translate("Paracetamol takes up to an hour to work.", 'british-to-american'))
    });

    test("Translate First, caramelise the onions.", function() {
        assert.equal('First, <span class="highlight">caramelize</span> the onions.', translator.translate("First, caramelise the onions.", 'british-to-american'))
    });

    test("Translate I spent the bank holiday at the funfair.", function() {
        assert.equal('I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.', translator.translate("I spent the bank holiday at the funfair.", 'british-to-american'))
    });

    test("Translate I had a bicky then went to the chippy.", function() {
        assert.equal('I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.', translator.translate("I had a bicky then went to the chippy.", 'british-to-american'))
    });

    test("Translate I've just got bits and bobs in my bum bag.", function() {
        assert.equal('I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.', translator.translate("I've just got bits and bobs in my bum bag.", 'british-to-american'))
    });

    test("Translate The car boot sale at Boxted Airfield was called off.", function() {
        assert.equal('The <span class="highlight">swap meet</span> at Boxted Airfield was called off.', translator.translate("The car boot sale at Boxted Airfield was called off.", 'british-to-american'))
    });

    test("Translate Have you met Mrs Kalyani?", function() {
        assert.equal('Have you met <span class="highlight">Mrs.</span> Kalyani?', translator.translate("Have you met Mrs Kalyani?", 'british-to-american'))
    });

    test("Translate Prof Joyner of King's College, London.", function() {
        assert.equal('<span class="highlight">Prof.</span> Joyner of King\'s College, London.', translator.translate("Prof Joyner of King's College, London.", 'british-to-american'))
    });

    test("Translate Tea time is usually around 4 or 4.30.", function() {
        assert.equal('Tea time is usually around 4 or <span class="highlight">4:30</span>.', translator.translate("Tea time is usually around 4 or 4.30.", 'british-to-american'))
    });

    test('Highlight Mangoes are my favorite fruit.', function() {
        assert.equal('Mangoes are my <span class="highlight">favourite</span> fruit.', translator.translate('Mangoes are my favorite fruit.', 'american-to-british'))
    });

    test('Highlight I ate yogurt for breakfast.', function() {
        assert.equal('I ate <span class="highlight">yoghurt</span> for breakfast.', translator.translate('I ate yogurt for breakfast.', 'american-to-british'))
    });

    test("Highlight We watched the footie match for a while.", function() {
        assert.equal('We watched the <span class="highlight">soccer</span> match for a while.', translator.translate("We watched the footie match for a while.", 'british-to-american'))
    });

    test("Highlight Paracetamol takes up to an hour to work.", function() {
        assert.equal('<span class="highlight">Tylenol</span> takes up to an hour to work.', translator.translate("Paracetamol takes up to an hour to work.", 'british-to-american'))
    });

    






});
