import { readFileSync } from "fs";
import { JSDOM } from "jsdom";
export default function templatePostProcessor(options = {}) {
  return {
    name: "template-post-processor",
    outputOptions(outputOptions) {
      if (!options.templatePath) {
        console.error("Option 'templatePath' is missing");
      }

      const template = readFileSync(options.templatePath, "utf-8");

      const dom = new JSDOM(template);

      dom.window.document.querySelectorAll("script").forEach((element) => {
        console.log(element.getAttribute("src"));
        element.setAttribute("src", "test");
      });
      console.log(dom.serialize());
    },
  };
}
