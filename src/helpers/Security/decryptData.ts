import { createDecipheriv } from "crypto";

const SECRET_KEY = process.env.ENCRYPTION_DECRYPTION_KEY as string;
const ALGORITHM = process.env.ENCRYPTION_DECRYPTION_ALGORITHM ? process.env.ENCRYPTION_DECRYPTION_ALGORITHM : "aes-256-ctr";

export type DecryptDataPropType = {
	iv: string;
	content: string;
};
/**
 * Add the following values in your .env file.
 * SECRET_KEY = process.env.ENCRYPTION_DECRYPTION_KEY -> crypto.randomString(16)
 * ALGORITHM = process.env.ENCRYPTION_DECRYPTION_ALGORITHM -> default: aes-256-ctr
 * It decrypts the data.
 * @param {DecryptDataPropType} encryptedData - The encrypted data that you want to decrypt.
 * @returns The decrypted data.
 */
const decryptData = (encryptedData: DecryptDataPropType) => {
	try {
		const _decipher = createDecipheriv(ALGORITHM, SECRET_KEY, Buffer.from(encryptedData.iv, "hex"));
		const _decrypted = Buffer.concat([_decipher.update(Buffer.from(encryptedData.content, "hex")), _decipher.final()]);
		return _decrypted.toString();
	} catch (error) {
		return (error as any).message;
	}
};

export default decryptData;
