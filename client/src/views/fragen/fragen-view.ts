import { render, html, TemplateResult } from "lit-html";
//@ts-ignore
import content from "./fragen-view.md";
import { unsafeHTML } from "lit-html/directives/unsafe-html";

export default class FragenView extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template: TemplateResult = html`
      ${unsafeHTML(content.html)}
    `;
    render(template, this);
  }
}

customElements.define("fragen-view", FragenView);
