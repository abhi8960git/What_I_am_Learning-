/** @type {import("jest").Config} **/
export default {
  testEnvironment: "node",
  extensionsToTreatAsEsm:[".ts"],
  transform: {
    "^.+\\.ts$": [
      "ts-jest",
      {
        useESM: true,
        tsconfig: {
          verbatimModuleSyntax: false,
          moduleResolution: "node",
          module: "ESNext",
        },
      },
    ],
  },
};