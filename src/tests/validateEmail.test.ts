import { validateEmail } from "../helpers/Validation";

enum EMAIL {
	VALID = "test@test.com",
	INVALID_NO_AT_SIGN = "test.test.com",
	INVALID_NO_RECIPIENT = "@test.com",
	INVALID_NO_DOMAIN = "test12@.com",
	INVALID_NO_TOP_DOMAIN = "test12@testorg.",
	INVALID_STARTS_WITH_SPECIAL_CHAR = "!!test@test.org",
	EMPTY = "",
}

describe("tests validateEmail helper function", () => {
	test("should return true when email is valid", () => {
		const _res = validateEmail(EMAIL.VALID);
		expect(_res).toEqual(true);
	});

	test("should return false when string does not contain @ symbol", () => {
		const _res = validateEmail(EMAIL.INVALID_NO_AT_SIGN);
		expect(_res).toEqual(false);
	});
	test("should return false when email is empty string", () => {
		const _res = validateEmail(EMAIL.EMPTY);
		expect(_res).toEqual(false);
	});
	test("should return false when email starts with a special character", () => {
		const _res = validateEmail(EMAIL.INVALID_STARTS_WITH_SPECIAL_CHAR);
		expect(_res).toEqual(false);
	});
	test("should return false when email has no domain", () => {
		const _res = validateEmail(EMAIL.INVALID_NO_DOMAIN);
		expect(_res).toEqual(false);
	});
	test("should return false when email has no top level domain", () => {
		const _res = validateEmail(EMAIL.INVALID_NO_TOP_DOMAIN);
		expect(_res).toEqual(false);
	});
	test("should return false when email has nothing before @ symbol", () => {
		const _res = validateEmail(EMAIL.INVALID_NO_RECIPIENT);
		expect(_res).toEqual(false);
	});
});
