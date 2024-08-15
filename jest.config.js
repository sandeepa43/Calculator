/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};

// module.exports = {
//   preset: "ts-jest",
//   testEnvironment: "jsdom",
//   setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"], // Add this line
//   transform: {
//     "^.+.tsx?$": ["ts-jest", {}],
//   },
//   moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
//   testPathIgnorePatterns: ["/node_modules/", "/dist/"],
// };
