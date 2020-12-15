import { html, render, TemplateResult } from "lit-html";
import links, { View } from "./navigation-constants";

export default class SidebarNavigation extends HTMLElement {
  constructor() {
    super();
  }

  private handleClick(): void {
    // @ts-ignore
    UIkit.offcanvas("#sidenav").hide();
  }

  private buildNaviPoint(navi: View): TemplateResult {
    return html`<li class="uk-text-large">
      <a href="${navi.urlHash}" @click=${this.handleClick}>${navi.heading}</a>
    </li>`;
  }

  connectedCallback(): void {
    const template = html`<div
      id="sidenav"
      uk-offcanvas="flip: true"
      class="uk-offcanvas"
    >
      <div class="uk-offcanvas-bar">
        <ul class="uk-nav">
          <button class="uk-offcanvas-close" type="button" uk-close></button>
          ${links.map((link) => this.buildNaviPoint(link))}
        </ul>
      </div>
    </div>`;
    render(template, this);
  }
}

customElements.define("sidebar-navigation", SidebarNavigation);
