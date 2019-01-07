const DEFAULT_PATTERN = 'zzzzzzzz';

const alphabets = {
    b: '01',
    d: '0123456789',
    h: '0123456789abcdef',
    H: '0123456789ABCDEF',
    c: 'abcdefghijklmnopqrstuvwxyz',
    C: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    a: 'abcdefghijklmnopqrstuvwxyz0123456789',
    A: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    z: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
};


/**
 * Generate new random id.
 * @param {string} [pattern=zzzzzzzz] Text pattern of desired id.
 * @returns {string} id Random id.
 */
function generate(pattern) {
    const _pattern = pattern || DEFAULT_PATTERN;

    const result = _pattern.split('').map((t) => {
        const abc = alphabets[t];
        return (typeof abc !== 'undefined' ? abc[Math.floor(Math.random() * abc.length)] : t);
    });

    return result.join('');
}


/**
 * Validate id against pattern.
 * @param {string} id Id to test.
 * @param {string} [pattern=zzzzzzzz] Text pattern.
 * @returns {boolean} True if the id could be generated with the pattern.
 */
function validate(id, pattern, flags) {
    const _id = id || '';
    const _pattern = pattern || DEFAULT_PATTERN;

    if (_id.length !== _pattern.length) return false;

    const ignoreCase = (flags ? flags.includes('i') : false);
    if (ignoreCase) {
        return _validateCaseInsensitive(_id, _pattern);
    }

    return _validateCaseSensitive(_id, _pattern);
}


/**
 * Add new or update exist alphabet.
 * @param {string} code One character which will be used in patterns.
 * @param {string} abc Alphabet chars.
 */
function setAlphabet(code, abc) {
    alphabets[code] = abc;
}


function _validateCaseSensitive(id, pattern) {
    const hasInvalidChar = id.split('').find((c, i) => {
        const d = pattern[i];
        const abc = alphabets[d];
        return (typeof abc !== 'undefined' ? !abc.includes(c) : d !== c);
    });

    return !hasInvalidChar;
}


function _validateCaseInsensitive(id, pattern) {
    const _id = id.toLowerCase();
    const hasInvalidChar = _id.split('').find((c, i) => {
        const d = pattern[i];
        const abc = alphabets[d];
        return (typeof abc !== 'undefined' ? !abc.includes(c) : d !== c);
    });

    return !hasInvalidChar;
}


module.exports = {
    generate,
    validate,
    setAlphabet
};
