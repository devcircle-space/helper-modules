import { randomBytes, pbkdf2 } from "crypto";
import { promisify } from "util";

/**
 * It takes a raw password, a complexity, and an iteration count, and returns a hashed password
 * @param {string} rawPassword - The password to hash
 * @param {number} [complexity=15] - The length of the salt.
 * @param [iterations=1000] - The number of iterations to use when generating the hash. The higher the
 * number, the more secure the hash, but the longer it will take to generate.
 * @returns the result of the pbkdf2 function.
 */
const generatePasswordHash = async (rawPassword: string, complexity: number = 15, iterations = 1000) => {
	if (!rawPassword || !rawPassword.length) return "rawPassword is a required argument";
	if (complexity <= 0) return "Complexity should be greater than zero";
	if (iterations <= 0) return "Iterations should be greater than zero";
	const _randomBytes = promisify(randomBytes);
	const _pbkdf2 = promisify(pbkdf2);
	try {
		const _salt = await _randomBytes(complexity);
		const _hash = await _pbkdf2(rawPassword, _salt, iterations, 64, "sha512");
		return _hash.toString("hex");
	} catch (error) {
		throw error as Error;
	}
};

export default generatePasswordHash;
