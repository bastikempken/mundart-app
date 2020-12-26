import { readFileSync, renameSync, writeFileSync } from "fs";
import { sep } from "path";
import { JSDOM } from "jsdom";
import hasha from "hasha";
import { magenta } from "colorette";

const log = (value) => console.log(magenta(value));

const parseFileName = (value) => {
  const splitValues = value.split("/");
  const file = splitValues.length
    ? splitValues[splitValues.length - 1]
    : splitValues;
  const splitFileName = file.split(".");
  return {
    file: splitFileName[0],
    ext: splitFileName[1],
    base: splitFileName.join("."),
  };
};

const buildSrcHash = async (srcPath, algorithm) => {
  return await hasha.fromFile(srcPath, {
    algorithm,
  });
};

const buildNewSrcValue = (srcValue, srcPath, hash) => {
  const { file } = parseFileName(srcPath);
  return srcValue.replace(file, `${file}.${hash}`);
};

const convertSrcValueToPath = (basePath, srcValue) =>
  process.cwd() + sep + basePath + sep + srcValue;

const renameFile = (srcPath, hash) => {
  const { file, ext, base } = parseFileName(srcPath);
  const distPath = srcPath.replace(`${base}`, `${file}.${hash}.${ext}`);
  renameSync(srcPath, distPath);
};

const modifyTags = async (window, options, tagType, attribute) => {
  const tags = window.document.querySelectorAll(tagType);
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    const srcValue = tag.getAttribute(attribute);
    const srcPath = convertSrcValueToPath(options.basePath, srcValue);
    const hash = await buildSrcHash(srcPath, options.algorithm);
    renameFile(srcPath, hash);
    const newSrcValue = buildNewSrcValue(srcValue, srcPath, hash);
    tag.setAttribute(attribute, newSrcValue);
    log(`fingerprint: ${srcValue} to ${newSrcValue}`);
  }
};

export default function templatePostProcessor(options = {}) {
  return {
    name: "template-post-processor",
    writeBundle(outputOptions) {
      if (!options.basePath || !options.templateFile) {
        console.error("Option 'templatePath' is missing");
      }
      (async () => {
        const filePath = options.basePath + sep + options.templateFile;
        const template = readFileSync(filePath, "utf8");
        const dom = new JSDOM(template);
        await modifyTags(dom.window, options, "script", "src");
        await modifyTags(dom.window, options, "link", "href");
        writeFileSync(filePath, dom.serialize(), { encoding: "utf8" });
      })().catch((err) => {
        console.error(err);
      });
    },
  };
}
