import { readFileSync } from "fs";
import { sep } from "path";
import { JSDOM } from "jsdom";
import hasha from "hasha";

const parseFileName = (value) => {
  const splitValues = value.split("/");
  const file = splitValues.length
    ? splitValues[splitValues.length - 1]
    : splitValues;
  const splitFileName = file.split(".");
  return { file: splitFileName[0], ext: "." + splitFileName[1] };
};

const buildSrcHash = async (srcValue, { basePath, algorithm }) => {
  const srcFile = process.cwd() + sep + basePath + sep + srcValue;
  console.log("SRC FILE", srcFile);
  const hash = await hasha.fromFile(srcFile, {
    algorithm,
  });
  const { file } = parseFileName(srcFile);
  return srcFile.replace(file, `${file}.${hash}`);
};

const modifySrcTags = async (window, options) => {
  window.document.querySelectorAll("script").forEach(async (element) => {
    const hashed = await buildSrcHash(element.getAttribute("src"), options);
    console.log("HASHED ", hashed);
    element.setAttribute("src", hashed);
  });
};

export default function templatePostProcessor(options = {}) {
  return {
    name: "template-post-processor",
    writeBundle(outputOptions) {
      if (!options.basePath || !options.templateFile) {
        console.error("Option 'templatePath' is missing");
      }

      const template = readFileSync(
        options.basePath + sep + options.templateFile,
        "utf-8"
      );

      const dom = new JSDOM(template);

      (async () => {
        console.log("BEGINN ASYNC");
        await modifySrcTags(dom.window, options);
        console.log(dom.serialize());
        console.log("END ASYNC");
      })().catch((err) => {
        console.error(err);
      });
    },
  };
}
