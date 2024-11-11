import { eslintConfig } from "@robot-inventor/eslint-config";

export default [
    {
        ignores: [
            "**/*.guard.ts",
        ]
    },
    ...eslintConfig
];
