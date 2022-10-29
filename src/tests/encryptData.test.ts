/**
 * encryptData each require a secret and an algorithm.
 * These values should be added to env variables with the following keys:
 * secret ==> ENCRYPTION_DECRYPTION_KEY=crypto.randomBytes(16).toString("hex")
 * algorithm ==> ENCRYPTION_DECRYPTION_ALGORITHM=aes-256-ctr (default value)
 */
import { encryptData } from "../helpers";

const DATA = "This is the test data";

describe("tests encryptData function", () => {
	test("should fail when rawData is empty", async () => {
		const _result = encryptData("");
		expect(_result.content).toEqual("");
	});
	test("should fail when rawData is undefined", async () => {
		const _result = encryptData(undefined);
		expect(_result.content).toBeUndefined();
	});
	test("should pass when { rawData } is not empty", async () => {
		const _result = encryptData(DATA);
		expect(_result).toBeDefined();
	});
});
