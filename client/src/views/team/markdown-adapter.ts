interface Markdown {
  html: string;
  metadata: { [key: string]: string };
}

export interface MarkdownContent {
  name: string;
  title: string;
  birthday: string;
  content: string;
}

const parseDOM = (content: string): HTMLDivElement => {
  const div = document.createElement("div");
  div.innerHTML = content;
  return div;
};

const extractName = (div: HTMLDivElement): string =>
  div.querySelector("h1").innerHTML;

const extractTitle = (div: HTMLDivElement): string =>
  div.querySelector("h2").innerHTML;

const extractBirthday = (div: HTMLDivElement): string => {
  const paragraphs = div.querySelectorAll("p")
  if(paragraphs?.length) {
    const firstParagraph = paragraphs[0].innerHTML;
    if(!firstParagraph.includes('NoBirthday')) {
      return firstParagraph
    }
  }
  return ''
}

const extractContent = (div: HTMLDivElement): string => {
  const children = Array.prototype.slice.call(div.children);
  const result = children
    .slice(3) // Skip heading, title, birthday !!
    .reduce(
      (prev: string, curr: HTMLParagraphElement) => prev + curr.outerHTML,
      ""
    );
    return result !== '<p>NoContent</p>' ? result : ''
};

export const extractPhoto = (content: Markdown): string => {
  const meta = content.metadata;
  return meta.picture;
};

export const convert = (content: Markdown): MarkdownContent => {
  const dom = parseDOM(content.html);
  return {
    name: extractName(dom),
    title: extractTitle(dom),
    birthday: extractBirthday(dom),
    content: extractContent(dom),
  };
};
