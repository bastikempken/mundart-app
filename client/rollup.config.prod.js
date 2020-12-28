import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import markdown from "@jackfranklin/rollup-plugin-markdown";
import jpgImporter from "./build-plugins/jpg-importer.js";
import templatePostProcessor from "./build-plugins/template-post-processor.js";
import { terser } from "rollup-plugin-terser";

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
      templatePostProcessor({
        basePath: "dist",
        templateFile: "index.html",
        algorithm: "md5",
      }),
      terser(),
      jpgImporter({
        basePath: "dist",
        compressions: [
          { src: "**/team/*.jpg", quality: 20 },
          { src: "**/slideshow/*.jpg", quality: 50 },
        ],
      }),

      nodeResolve(),
      replace({
        "process.env.NODE_ENV": JSON.stringify("prod"),
      }),
      copy({
        targets: [
          { src: "src/index.html", dest: "dist" },
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
