const tape = require('tape'); // https://github.com/substack/tape

const stampId = require('../index.js');

tape('default pattern', (t) => {
    const isValid = stampId.validate('abcdABCD');
    t.equal(isValid, true, 'should be valid');
    t.end();
});

tape('default pattern, id less length', (t) => {
    const isValid = stampId.validate('abcdABC');
    t.equal(isValid, false, 'should be invalid');
    t.end();
});

tape('default pattern, id more length', (t) => {
    const isValid = stampId.validate('abcdABC');
    t.equal(isValid, false, 'should be invalid');
    t.end();
});

tape('test b-dictionary', (t) => {
    const id = '--1-0-01';
    const isValid = stampId.validate(id, '--b-b-bb');
    t.equal(isValid, true, 'should be valid');
    t.end();
});

tape('test b-dictionary 2', (t) => {
    const id = '--2-0-01';
    const isValid = stampId.validate(id, '--b-b-bb');
    t.equal(isValid, false, 'should be invalid');
    t.end();
});

tape('test d-dictionary', (t) => {
    const id = '0.12.9-5/2';
    const isValid = stampId.validate(id, 'd.dd.d-d/d');
    t.equal(isValid, true, 'should be valid');
    t.end();
});

tape('test d-dictionary 2', (t) => {
    const id = '0.12-9-5/2';
    const isValid = stampId.validate(id, 'd.dd.d-d/d');
    t.equal(isValid, false, 'should be invalid');
    t.end();
});

tape('test h-dictionary', (t) => {
    const id = '0xabcdef11';
    const isValid = stampId.validate(id, '0xhhhhhhhh');
    t.equal(isValid, true, 'should be valid');
    t.end();
});

tape('test h-dictionary 2', (t) => {
    const id = '0xabcdef11';
    const isValid = stampId.validate(id, '0xhhh-hhhh');
    t.equal(isValid, false, 'should be invalid');
    t.end();
});

tape('test H-dictionary', (t) => {
    const id = 'DEAD.BEAF';
    const isValid = stampId.validate(id, 'HHHH.HHHH');
    t.equal(isValid, true, 'should be valid');
    t.end();
});

tape('test H-dictionary 2', (t) => {
    const id = 'DEADBEAF.';
    const isValid = stampId.validate(id, 'HHHH.HHHH');
    t.equal(isValid, false, 'should be invalid');
    t.end();
});

tape('test c-dictionary', (t) => {
    const id = 'abcd-efghijklmnopqrstuv-wxyz';
    const isValid = stampId.validate(id, 'cccc-cccccccccccccccccc-cccc');
    t.equal(isValid, true, 'should be valid');
    t.end();
});

tape('test c-dictionary 2', (t) => {
    const id = 'abcd-efghijKlmnopqrstuv-wxyz';
    const isValid = stampId.validate(id, 'cccc-cccccccccccccccccc-cccc');
    t.equal(isValid, false, 'should be invalid');
    t.end();
});

tape('test C-dictionary', (t) => {
    const id = 'FRIDAY13';
    const isValid = stampId.validate(id, 'CCCCCC13');
    t.equal(isValid, true, 'should be valid');
    t.end();
});

tape('test C-dictionary 2', (t) => {
    const id = 'aFRIDAY13';
    const isValid = stampId.validate(id, 'CCCCCCC13');
    t.equal(isValid, false, 'should be invalid');
    t.end();
});

tape('test a-dictionary', (t) => {
    const id = '16ab2-ab10z';
    const isValid = stampId.validate(id, 'aaaaa-aaaaa');
    t.equal(isValid, true, 'should be valid');
    t.end();
});

tape('test a-dictionary 2', (t) => {
    const id = '16ab2-ab10Z';
    const isValid = stampId.validate(id, 'aaaaa-aaaaa');
    t.equal(isValid, false, 'should be invalid');
    t.end();
});

tape('test A-dictionary', (t) => {
    const id = '16AB2+AB10Z';
    const isValid = stampId.validate(id, 'AAAAA+AAAAA');
    t.equal(isValid, true, 'should be valid');
    t.end();
});

tape('test A-dictionary 2', (t) => {
    const id = '16AB2+AB10z';
    const isValid = stampId.validate(id, 'AAAAA+AAAAA');
    t.equal(isValid, false, 'should be invalid');
    t.end();
});


tape('test z-dictionary', (t) => {
    const id = '16ax2/AB10Z';
    const isValid = stampId.validate(id, 'zzzzz/zzzzz');
    t.equal(isValid, true, 'should be valid');
    t.end();
});

tape('test z-dictionary 2', (t) => {
    const id = '16ax2_AB10Z';
    const isValid = stampId.validate(id, 'zzzzz/zzzzz');
    t.equal(isValid, false, 'should be invalid');
    t.end();
});

tape('test mixed dictionaries', (t) => {
    const id = '01-56-7f-8F-pq-PQ-a9-A9-aA9';
    const isValid = stampId.validate(id, 'bb-dd-hh-HH-cc-CC-aa-AA-zzz');
    t.equal(isValid, true, 'should be valid');
    t.end();
});

tape('test custom dictionary', (t) => {
    stampId.setAlphabet('?', '-+./');
    const id = 'a0+b1/z9.gg-zz';
    const isValid = stampId.validate(id, 'aa?aa?aa?aa?aa');
    t.equal(isValid, true, 'should be valid');
    t.end();
});
