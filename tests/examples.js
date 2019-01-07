const tape = require('tape'); // https://github.com/substack/tape

const stampId = require('../index.js');


tape('simplified SSN format', (t) => {
    const id = stampId.generate('ddd-dd-dddd');
    const isValid = stampId.validate(id, 'ddd-dd-dddd');

    t.comment(`Example of simplified SSN: "${id}"`);
    t.equal(typeof id, 'string', 'should be string');
    t.equal(id.length, 11, 'should be correcr length');
    t.equal(isValid, true, 'should be valid');

    t.end();
});


tape('USA international phone number format', (t) => {
    stampId.setAlphabet('N', '23456789');
    const id = stampId.generate('+1 Ndd-Ndd-dddd');
    const isValid = stampId.validate(id, '+1 Ndd-Ndd-dddd');

    t.comment(`Example of USA international phone number: "${id}"`);
    t.equal(typeof id, 'string', 'should be string');
    t.equal(id.length, 15, 'should be correct length');
    t.equal(isValid, true, 'should be valid');

    t.end();
});


tape('Canada postal code format', (t) => {
    stampId.setAlphabet('Y', 'ABCEGHJKLMNPRSTVXY');
    const id = stampId.generate('YdC dCd');
    const isValid = stampId.validate(id, 'YdC dCd');

    t.comment(`Example of Canada postal code: "${id}"`);
    t.equal(typeof id, 'string', 'should be string');
    t.equal(id.length, 7, 'should be correct length');
    t.equal(isValid, true, 'should be valid');

    t.end();
});

