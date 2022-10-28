import { randomBytes, createCipheriv, createDecipheriv } from "crypto";

const SECRET_KEY = process.env.ENCRYPTION_DECRYPTION_KEY as string;
const ALGORITHM = process.env.ENCRYPTION_DECRYPTION_ALGORITHM ? process.env.ENCRYPTION_DECRYPTION_ALGORITHM : "aes-256-ctr";

namespace EncryptDecrypt {
	export type EncryptDataPropType = any;
	export type DecryptDataPropType = {
		iv: string;
		content: string;
	};
	/**
	 * Add the following values in your .env file.
	 * SECRET_KEY = process.env.ENCRYPTION_DECRYPTION_KEY -> crypto.randomString(16)
	 * ALGORITHM = process.env.ENCRYPTION_DECRYPTION_ALGORITHM -> default: aes-256-ctr
	 * It takes a raw data, creates a random initialization vector, creates a cipher using the
	 * initialization vector and the secret key, encrypts the raw data using the cipher, and returns the
	 * initialization vector and the encrypted data
	 * @param {EncryptDataPropType}  - `rawData` - the data to be encrypted
	 * @returns An object with two properties: iv and content.
	 */
	export const encryptData = (rawData: EncryptDataPropType) => {
		try {
			const _iv = randomBytes(16);
			const _cipher = createCipheriv(ALGORITHM, SECRET_KEY, _iv);
			const _encrypted = Buffer.concat([_cipher.update(rawData), _cipher.final()]);
			return {
				iv: _iv.toString("hex"),
				content: _encrypted.toString("hex"),
			};
		} catch (error) {
			return (error as any).message;
		}
	};
	/**
	 * Add the following values in your .env file.
	 * SECRET_KEY = process.env.ENCRYPTION_DECRYPTION_KEY -> crypto.randomString(16)
	 * ALGORITHM = process.env.ENCRYPTION_DECRYPTION_ALGORITHM -> default: aes-256-ctr
	 * It decrypts the data.
	 * @param {DecryptDataPropType} encryptedData - The encrypted data that you want to decrypt.
	 * @returns The decrypted data.
	 */
	export const decryptData = (encryptedData: DecryptDataPropType) => {
		try {
			const _decipher = createDecipheriv(ALGORITHM, SECRET_KEY, Buffer.from(encryptedData.iv, "hex"));
			const _decrypted = Buffer.concat([_decipher.update(Buffer.from(encryptedData.content, "hex")), _decipher.final()]);
			return _decrypted.toString();
		} catch (error) {
			return (error as any).message;
		}
	};
}

export default EncryptDecrypt;
