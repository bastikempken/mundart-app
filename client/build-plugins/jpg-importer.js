import { createFilter } from "rollup-pluginutils";
import { renameSync } from "fs";
import { extname, parse, sep } from "path";
import hasha from "hasha";
import imagemin from "imagemin";
import imageminMozjpeg from "imagemin-mozjpeg";
import { blue } from "colorette";
import picomatch from "picomatch";

const DEFAULTS = {
  basePath: "dist",
  algorithm: "md5",
};

const DEFAULT_JPG_QUALITY = 70;

const validTypes = [".jpg", ".jpeg"];

const constTemplate = (content) => `export default "${content}";`;

export default function jpgImporter(options = {}) {
  const workingOptions = Object.assign(DEFAULTS, options);
  const filter = createFilter(workingOptions.include, workingOptions.exclude);

  return {
    name: "jpeg-importer",
    load(id) {
      if (!filter(id)) {
        return;
      }
      const extension = extname(id);
      if (!validTypes.includes(extension)) return;
      return exec(id, workingOptions);
    },
  };
}

const exec = async (id, workingOptions) => {
  const hash = await hasha.fromFile(id, {
    algorithm: workingOptions.algorithm,
  });
  const pathObject = pathEvaluation(id, hash, workingOptions.basePath);

  const quality = await getCompression(
    workingOptions.compressions,
    pathObject.srcFile
  );

  await imagemin([pathObject.srcFile], {
    destination: pathObject.distDir,
    plugins: [
      imageminMozjpeg({
        quality,
      }),
    ],
  });

  console.log(
    blue(
      `compressed ${pathObject.srcFile} to ${pathObject.distFileHashed} with quality ${quality}`
    )
  );

  renameSync(pathObject.distFile, pathObject.distFileHashed);

  return constTemplate(pathObject.assetUri).trim();
};

const getCompression = async (compressions, srcFile) => {
  let result = DEFAULT_JPG_QUALITY;
  if (compressions) {
    let x;
    for (x in compressions) {
      const { src, quality } = compressions[x];
      const isMatch = picomatch(src);
      if (isMatch(srcFile)) {
        result = quality;
        break;
      }
    }
  }
  return result;
};

/**
 * ext:             .jpg
 * base:            somepic
 * hashedBase:      somepic.[hash]
 * srcFile:         src/assets/subfolder/somepic.jpg
 * distFile:        dist/assets/subfolder/somepic.jpg
 * distFileHashed:  dist/assets/subfolder/somepic.[hash].jpg
 * srcDir:          src/assets/subfolder
 * distDir:         dist/assets/subfolder
 * assetUri:        assets/subfolder/somepic.[hash].jpg
 */
const pathEvaluation = (id, hash, basePath) => {
  const { name, ext, base, dir } = parse(id);
  const hashedBase = `${name}.${hash}${ext}`;
  const srcDir = dir.replace(`${process.cwd()}${sep}`, "");
  const distDir = [basePath, ...srcDir.split(sep).slice(1)].join(sep);
  const distFileHashed = `${distDir}${sep}${hashedBase}`;
  const assetUri = distFileHashed
    .replace(`${basePath}${sep}`, "")
    .replace(new RegExp(sep, "g"), "/");
  return {
    srcDir,
    distDir,
    srcFile: `${srcDir}${sep}${base}`,
    distFileHashed,
    distFile: `${distDir}${sep}${base}`,
    assetUri,
  };
};
