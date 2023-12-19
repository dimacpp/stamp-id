declare const alphabets: {
  b: string;
  d: string;
  h: string;
  H: string;
  c: string;
  C: string;
  a: string;
  A: string;
  z: string;
};

/**
 * Generate new random id.
 * @param {string} [pattern=zzzzzzzz] Text pattern of desired id.
 * @returns {string} Random id.
 */
declare function generate(pattern?: string): string;

/**
 * Validate id against pattern.
 * @param {string} id Id to test.
 * @param {string} [pattern=zzzzzzzz] Text pattern.
 * @param {string} [flags] Flags string ("i" means ignore case).
 * @returns {boolean} True if the id could be generated with the pattern.
 */
declare function validate(
  id: string,
  pattern?: string,
  flags?: string
): boolean;

/**
 * Add new or update existing alphabet.
 * @param {string} code One character which will be used in patterns.
 * @param {string} abc Alphabet chars.
 */
declare function setAlphabet(code: string, abc: string): void;

export { generate, setAlphabet, validate };
