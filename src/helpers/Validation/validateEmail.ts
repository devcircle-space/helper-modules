const PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

/**
 * If the email matches the pattern, return true, otherwise return false.
 * @param {string} email - The email address to validate.
 * @returns A boolean value.
 */
const validateEmail = (email: string) => {
	if (PATTERN.test(email)) return true;
	return false;
};

export default validateEmail;
