import { TeamMember } from "./team-view";

const parseDOM = (content: string): HTMLDivElement => {
  const div = document.createElement("div");
  div.innerHTML = content;
  return div;
};

const extractName = (div: HTMLDivElement): string =>
  div.querySelector("h1").innerHTML;

const extractTitle = (div: HTMLDivElement): string =>
  div.querySelector("h2").innerHTML;

const extractBirthday = (div: HTMLDivElement): string =>
  div.querySelectorAll("p")[0].innerHTML;

const extractContent = (div: HTMLDivElement): string => {
  const children = Array.prototype.slice.call(div.children);
  return children
    .slice(3) // Skip heading, title, birthday !!
    .reduce(
      (prev: string, curr: HTMLParagraphElement) => prev + curr.outerHTML,
      ""
    );
};

const extractPhoto = (meta: { [key: string]: string }): string => meta.picture;

export const convert = (content: {
  html: string;
  metadata: { [key: string]: string };
}): TeamMember => {
  const dom = parseDOM(content.html);
  return {
    name: extractName(dom),
    title: extractTitle(dom),
    photo: extractPhoto(content.metadata),
    birthday: extractBirthday(dom),
    content: extractContent(dom),
  };
};
