//@ts-ignore
import content from "./tier-therapie-view.md";
import { html, render, TemplateResult } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html";

export default class TierTherapieView extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const renderINput = `${content.html}`;
    console.log(renderINput);

    const template: TemplateResult = html`${unsafeHTML(content.html)}`;
    render(template, this);
  }
}

customElements.define("tier-therapie-view", TierTherapieView);
