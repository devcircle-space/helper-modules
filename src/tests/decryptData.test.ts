/**
 * decryptData each require a secret and an algorithm.
 * These values should be added to env variables with the following keys:
 * secret ==> ENCRYPTION_DECRYPTION_KEY=crypto.randomBytes(16).toString("hex")
 * algorithm ==> ENCRYPTION_DECRYPTION_ALGORITHM=aes-256-ctr (default value)
 */
import { decryptData, encryptData } from "../helpers";

const DATA = "This is the test data";

let testEncryptedData;
beforeEach(() => {
	testEncryptedData = encryptData(DATA);
});

describe("tests decryptData function", () => {
	test("should fail when encryptedData.content is empty", async () => {
		const _result = decryptData({ content: "", iv: testEncryptedData.iv });
		expect(_result).toEqual("");
	});
	test("should fail when encryptedData.iv is empty", async () => {
		const _result = decryptData({ content: testEncryptedData.content, iv: "" });
		expect(_result).toEqual("Invalid initialization vector");
	});
	test("should pass when { encryptedData } is valid", async () => {
		const _result = decryptData(testEncryptedData);
		expect(_result).toEqual(DATA);
	});
});
