import { generatePasswordHash } from "../helpers/Security";

enum PASSWORD {
	VALID = "NewUser@123",
	EMPTY = "",
}

describe("tests function to generate password hash", () => {
	test("should return hash password string", async () => {
		const _result = await generatePasswordHash(PASSWORD.VALID);
		expect(_result).toBeDefined();
	});
	test("should return error message if password is empty string", async () => {
		const _result = await generatePasswordHash(PASSWORD.EMPTY);
		expect(_result).toEqual("rawPassword is a required argument");
	});
	test("should return error message for negative complexity value", async () => {
		const _result = await generatePasswordHash(PASSWORD.VALID, -50);
		expect(_result).toEqual("Complexity should be greater than zero");
	});
	test("should return error message for negative iteration value", async () => {
		const _result = await generatePasswordHash(PASSWORD.VALID, 100000, -10);
		expect(_result).toEqual("Iterations should be greater than zero");
	});
});
