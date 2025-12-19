import { createDefaultPreset } from "ts-jest";

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
export default {
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    ...tsJestTransformCfg,
  },
  globals: {
    "ts-jest": {
      useESM: true,
      tsconfig: {
        verbatimModuleSyntax: false,
        moduleResolution: "node",
        module: "ESNext",
      },
    },
  },
};