const tape = require('tape'); // https://github.com/substack/tape

const stampId = require('../index.js');


tape('no args', (t) => {
    const pid = stampId.generate();
    t.equal(typeof pid, 'string', 'should be string');
    t.equal(pid.length, 8, 'should be default length');
    t.equal(pid.split('').find((c) => !'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.includes(c)), undefined, 'should contain chars from z-dictionary');
    t.end();
});

tape('empty pattern', (t) => {
    const pid = stampId.generate('');
    t.equal(typeof pid, 'string', 'should be string');
    t.equal(pid.length, 8, 'should be default length');
    t.equal(pid.split('').find((c) => !'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.includes(c)), undefined, 'should contain chars from z-dictionary');
    t.end();
});

tape('b-dictionary random length', (t) => {
    const length = Math.floor(Math.random() * 100) + 1;
    const pid = stampId.generate('b'.repeat(length));
    t.equal(pid.length, length, 'should be correct length');
    t.equal(pid.split('').find((c) => !'01'.includes(c)), undefined, 'should contain chars from b-dictionary only');
    t.end();
});

tape('b-dictionary random length II', (t) => {
    const length = Math.floor(Math.random() * 100) + 1;
    const pid = stampId.generate('b'.repeat(length));
    t.equal(pid.length, length, 'should be correct length');
    t.equal(pid.split('').find((c) => 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ23456789'.includes(c)), undefined, 'should not contain chars outside b-dictionary');
    t.end();
});

tape('d-dictionary random length', (t) => {
    const length = Math.floor(Math.random() * 100) + 1;
    const pid = stampId.generate('d'.repeat(length));
    t.equal(pid.length, length, 'should be correct length');
    t.equal(pid.split('').find((c) => !'0123456789'.includes(c)), undefined, 'should contain chars from d-dictionary only');
    t.end();
});

tape('d-dictionary random length II', (t) => {
    const length = Math.floor(Math.random() * 100) + 1;
    const pid = stampId.generate('d'.repeat(length));
    t.equal(pid.length, length, 'should be correct length');
    t.equal(pid.split('').find((c) => 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(c)), undefined, 'should not contain chars outside d-dictionary');
    t.end();
});

tape('h-dictionary random length', (t) => {
    const length = Math.floor(Math.random() * 100) + 1;
    const pid = stampId.generate('h'.repeat(length));
    t.equal(pid.length, length, 'should be correct length');
    t.equal(pid.split('').find((c) => !'0123456789abcdef'.includes(c)), undefined, 'should contain chars from h-dictionary only');
    t.end();
});

tape('h-dictionary random length II', (t) => {
    const length = Math.floor(Math.random() * 100) + 1;
    const pid = stampId.generate('h'.repeat(length));
    t.equal(pid.length, length, 'should be correct length');
    t.equal(pid.split('').find((c) => 'ghijklmnopqrstuvwxyzGHIJKLMNOPQRSTUVWXYZ'.includes(c)), undefined, 'should not contain chars outside h-dictionary');
    t.end();
});

tape('H-dictionary random length', (t) => {
    const length = Math.floor(Math.random() * 100) + 1;
    const pid = stampId.generate('H'.repeat(length));
    t.equal(pid.length, length, 'should be correct length');
    t.equal(pid.split('').find((c) => !'0123456789ABCDEF'.includes(c)), undefined, 'should contain chars from H-dictionary only');
    t.end();
});

tape('H-dictionary random length II', (t) => {
    const length = Math.floor(Math.random() * 100) + 1;
    const pid = stampId.generate('H'.repeat(length));
    t.equal(pid.length, length, 'should be correct length');
    t.equal(pid.split('').find((c) => 'ghijklmnopqrstuvwxyzGHIJKLMNOPQRSTUVWXYZ'.includes(c)), undefined, 'should not contain chars outside H-dictionary');
    t.end();
});

tape('c-dictionary random length', (t) => {
    const length = Math.floor(Math.random() * 100) + 1;
    const pid = stampId.generate('c'.repeat(length));
    t.equal(pid.length, length, 'should be correct length');
    t.equal(pid.split('').find((c) => !'abcdefghijklmnopqrstuvwxyz'.includes(c)), undefined, 'should contain chars from c-dictionary only');
    t.end();
});

tape('c-dictionary random length II', (t) => {
    const length = Math.floor(Math.random() * 100) + 1;
    const pid = stampId.generate('c'.repeat(length));
    t.equal(pid.length, length, 'should be correct length');
    t.equal(pid.split('').find((c) => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.includes(c)), undefined, 'should not contain chars outsize c-dictionary');
    t.end();
});


tape('C-dictionary random length', (t) => {
    const length = Math.floor(Math.random() * 100) + 1;
    const pid = stampId.generate('C'.repeat(length));
    t.equal(pid.length, length, 'should be correct length');
    t.equal(pid.split('').find((c) => !'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(c)), undefined, 'should contain chars from C-dictionary');
    t.end();
});

tape('a-dictionary random length', (t) => {
    const length = Math.floor(Math.random() * 100) + 1;
    const pid = stampId.generate('a'.repeat(length));
    t.equal(pid.length, length, 'should be correct length');
    t.equal(pid.split('').find((c) => !'abcdefghijklmnopqrstuvwxyz0123456789'.includes(c)), undefined, 'should contain chars from a-dictionary');
    t.end();
});

tape('A-dictionary random length', (t) => {
    const length = Math.floor(Math.random() * 100) + 1;
    const pid = stampId.generate('A'.repeat(length));
    t.equal(pid.length, length, 'should be correct length');
    t.equal(pid.split('').find((c) => !'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.includes(c)), undefined, 'should contain chars from A-dictionary');
    t.end();
});

tape('z-dictionary random length', (t) => {
    const length = Math.floor(Math.random() * 100) + 1;
    const pid = stampId.generate('z'.repeat(length));
    t.equal(pid.length, length, 'should be correct length');
    t.equal(pid.split('').find((c) => !'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.includes(c)), undefined, 'should contain chars from z-dictionary');
    t.end();
});

