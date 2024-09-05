'use strict';

const bodyParser = require('body-parser');
const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const text = req.body.text;
      const locale = req.body.locale;
      console.log(text, locale);
      if (text === undefined || locale === undefined) {return res.json({ error: "Required field(s) missing"})}
      if (text === '') {return res.json({ error: "No text to translate" });}
      if (locale !== 'american-to-british' && locale !== 'british-to-american') {return res.json({ error: "Invalid value for locale field" });}
      let result = translator.translate(text, locale);
      console.log(result);
      res.json({text: text, translation: result});
    });
};
