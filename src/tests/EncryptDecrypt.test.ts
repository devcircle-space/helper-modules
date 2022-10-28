/**
 * encryptData and decryptData, each require a secret and an algorithm.
 * These values should be added to env variables with the following keys:
 * secret ==> ENCRYPTION_DECRYPTION_KEY=crypto.randomBytes(16).toString("hex")
 * algorithm ==> ENCRYPTION_DECRYPTION_ALGORITHM=aes-256-ctr (default value)
 */
import { EncryptDecrypt } from "../helpers";

const DATA = "This is the test data";

describe("tests helper functions in EncryptDecrypt namespace", () => {
	describe("tests encryptData function", () => {
		test("should fail when rawData is empty", async () => {
			const _result = EncryptDecrypt.encryptData("");
			expect(_result.content).toEqual("");
		});
		test("should fail when rawData is undefined", async () => {
			const _result = EncryptDecrypt.encryptData(undefined);
			expect(_result.content).toBeUndefined();
		});
		test("should pass when { rawData } is not empty", async () => {
			const _result = EncryptDecrypt.encryptData(DATA);
			expect(_result).toBeDefined();
		});
	});

	describe("tests decryptData function", () => {
		let testEncryptedData;
		beforeEach(() => {
			testEncryptedData = EncryptDecrypt.encryptData(DATA);
		});
		test("should fail when encryptedData.content is empty", async () => {
			const _result = EncryptDecrypt.decryptData({ content: "", iv: testEncryptedData.iv });
			expect(_result).toEqual("");
		});
		test("should fail when encryptedData.iv is empty", async () => {
			const _result = EncryptDecrypt.decryptData({ content: testEncryptedData.content, iv: "" });
			expect(_result).toEqual("Invalid initialization vector");
		});
		test("should pass when { encryptedData } is valid", async () => {
			const _result = EncryptDecrypt.decryptData(testEncryptedData);
			expect(_result).toEqual(DATA);
		});
	});
});
