/**
 * If a password is provided, and a pattern is provided, return whether the password matches the
 * pattern. Otherwise, return whether the password matches the default pattern.
 * Returns true if password is at least 8 characters long, contains at least 1 Uppercase, 1 numeric,
 * and 1 special character, else returns false.
 * @param {string} password - The password to validate.
 * @param {RegExp} [pattern] - The pattern to test the password against. If not provided, the default
 * pattern will be used.
 * @returns boolean
 */

const DEFAULT_PATTERN = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,}$/gm;

const validatePassword = (password: string, pattern?: RegExp) => {
	if (!password) return false;
	if (pattern) return pattern.test(password);
	return DEFAULT_PATTERN.test(password);
};

export default validatePassword;
