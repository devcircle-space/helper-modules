import { validatePassword } from "../helpers/Validation";

enum PASSWORD {
	VALID = "Newuser@123",
	EMPTY = "",
	NO_UPPERCASE = "newuser@123",
	NO_NUMERIC = "Newuser@",
	LENGTH_LESS_THAN_EIGHT = "pass@12",
	NO_SPECIAL_CHARACTER = "Newuser123",
	CUSTOM_PASSWORD = "Newuser",
}
const CUSTOM_PATTERN = /^[a-zA-Z]{5,12}$/;

describe("tests validatePassword helper function", () => {
	test("should return true for valid password", () => {
		const _result = validatePassword(PASSWORD.VALID);
		expect(_result).toEqual(true);
	});
	test("should return true for valid password and user defined pattern", () => {
		const _result = validatePassword(PASSWORD.CUSTOM_PASSWORD, CUSTOM_PATTERN);
		expect(_result).toEqual(true);
	});

	test("should return false for empty password", () => {
		const _result = validatePassword(PASSWORD.EMPTY);
		expect(_result).toEqual(false);
	});
	test("should return false for password length < 8", () => {
		const _result = validatePassword(PASSWORD.LENGTH_LESS_THAN_EIGHT);
		expect(_result).toEqual(false);
	});
	test("should return false for password with no uppercase character", () => {
		const _result = validatePassword(PASSWORD.NO_UPPERCASE);
		expect(_result).toEqual(false);
	});
	test("should return false for password with no numeric character", () => {
		const _result = validatePassword(PASSWORD.NO_NUMERIC);
		expect(_result).toEqual(false);
	});
	test("should return false for password with no special character", () => {
		const _result = validatePassword(PASSWORD.NO_SPECIAL_CHARACTER);
		expect(_result).toEqual(false);
	});
});
