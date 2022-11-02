import { Request, Response, NextFunction } from "express";
import { verify, JwtPayload, Jwt } from "jsonwebtoken";

declare global {
	namespace Express {
		interface Request {
			valid: Jwt | JwtPayload;
		}
	}
}
/**
 * This middleware can directly be used between request, in the route, to protect any route.
 * Secret used to generate JWT token will be used to verify token, set value in process.env.JWT_TOKEN_SECRET
 * Max age is by default set to "1d" but can be configured using process.env.JWT_TOKEN_MAX_AGE.
 * If the token is valid, a valid: Jwt | JwtPayload; object as added to the request object and next() is called.
 * Else, response with error code and message will be sent to the client.
 * @param req
 * @param res
 * @param next
 * @config secret - process.env.JWT_TOKEN_SECRET
 * @config maxAge - process.env.JWT_TOKEN_MAX_AGE ?? "1d"
 * @returns
 */
const validateJwtToken = (req: Request, res: Response, next: NextFunction) => {
	if (!req.headers.authorization) return res.status(400).json("Missing mandatory authorization header");
	try {
		const _token = req.headers.authorization;
		const _valid = verify(_token, process.env.JWT_TOKEN_SECRET, {
			maxAge: "1d" ?? process.env.JWT_TOKEN_MAX_AGE,
			algorithms: ["HS512"],
			complete: true,
		});
		if (!_valid) return res.status(401).json("Invalid token, access denied");
		req.valid = _valid;
		return next();
	} catch (error) {
		const { message } = error as Error;
		return res.status(500).json(message);
	}
};

export default validateJwtToken;
