import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import markdown from "@jackfranklin/rollup-plugin-markdown";

export default [
  {
    input: "src/app.ts",
    output: {
      file: "dist/app.js",
      format: "esm",
    },
    plugins: [
      markdown(),
      typescript({
        target: "es6",
        allowJs: true,
      }),
      nodeResolve(),
      replace({
        "process.env.NODE_ENV": JSON.stringify("development"),
      }),
      copy({
        targets: [
          { src: "src/index.html", dest: "dist" },
          { src: "src/assets/*", dest: "dist/assets" },
          {
            src: "node_modules/uikit/dist/js/uikit.js",
            dest: "dist/libs",
          },
          {
            src: "node_modules/uikit/dist/js/uikit-icons.js",
            dest: "dist/libs",
          },
        ],
      }),
    ],
  },
];
