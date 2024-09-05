const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    test('POST request to /api/translate with text and locale fields', function(done) {
        chai.request(server)
        .post('/api/translate')
        .send({
            text: 'Mangoes are my favorite fruit.',
            locale: 'american-to-british'
        })
        .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
            done();
        })
    });

    test('POST request to /api/translate with invalid locale field', function(done) {
        chai.request(server)
        .post('/api/translate')
        .send({
            text: 'Mangoes are my favorite fruit.',
            locale: 'british'
        })
        .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.error, 'Invalid value for locale field');
            done();
        })
    });

    test('POST request to /api/translate with missing text field', function(done) {
        chai.request(server)
        .post('/api/translate')
        .send({
            locale: 'american-to-british'
        })
        .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.error, 'Required field(s) missing');
            done();
        })
    });

    test('POST request to /api/translate with missing locale field', function(done) {
        chai.request(server)
        .post('/api/translate')
        .send({
            text: 'Mangoes are my favorite fruit.'
        })
        .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.error, 'Required field(s) missing');
            done();
        })
    });

    test('POST request to /api/translate with empty text field', function(done) {
        chai.request(server)
        .post('/api/translate')
        .send({
            text: '',
            locale: 'american-to-british'
        })
        .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.error, 'No text to translate');
            done();
        })
    });

    test('POST request to /api/translate with no translation needed', function(done) {
        chai.request(server)
        .post('/api/translate')
        .send({
            text: 'test',
            locale: 'american-to-british'
        })
        .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.translation, 'Everything looks good to me!');
            done();
        })
    });






});
