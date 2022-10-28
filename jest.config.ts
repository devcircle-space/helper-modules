export default {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: "./src/tests/coverage",
	coverageProvider: "babel",
	moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
	roots: ["./src"],
	setupFiles: ["dotenv/config"],
	testEnvironment: "jest-environment-node",
	testEnvironmentOptions: {
		url: "http://localhost",
	},
};
