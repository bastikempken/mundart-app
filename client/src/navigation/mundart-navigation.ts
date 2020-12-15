import { html, render, TemplateResult } from "lit-html";
import { mapping } from "./navigation-event-mapping";
import links, { home, NavigationEvent, View } from "./navigation-constants";
import history from "history/browser";

export default class MundartNavigation extends HTMLElement {
  private activePath = history.location.pathname;
  private historyListen;
  constructor() {
    super();
    this.historyListen = history.listen(({ location }) => {
      const event = mapping(location.pathname);
      this.dispatchCustomEvent(event);
      this.render();
    });
  }

  private dispatchCustomEvent(navigationEvent: NavigationEvent): void {
    const event = new CustomEvent("mundart-nav", {
      detail: {
        navigationEvent,
      },
      bubbles: true,
    });
    this.dispatchEvent(event);
  }

  private handleClick(path: string, event: MouseEvent): void {
    event.preventDefault();
    this.activePath = path;
    history.push(path);
  }

  private buildNaviPoint(navi: View): TemplateResult {
    return html`<li
      class=${this.activePath === navi.urlHash ? "uk-active" : ""}
    >
      <a
        href="${navi.urlHash}"
        @click=${(e) => this.handleClick(navi.urlHash, e)}
        >${navi.heading}</a
      >
    </li>`;
  }

  private render(): void {
    const template = html`<nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left">
        <a class="uk-navbar-toggle uk-hidden@s" uk-toggle="target: #sidenav">
          <span uk-navbar-toggle-icon></span>
          <span class="uk-margin-small-left">Menu</span>
        </a>
        <a class="uk-navbar-item uk-logo uk-visible@s" href="#">Logo</a>
        <ul class="uk-navbar-nav uk-visible@s">
          ${links.map((link) => this.buildNaviPoint(link))}
        </ul>
      </div>
    </nav>`;
    render(template, this);
  }

  connectedCallback(): void {
    this.activePath = history.location.pathname;
    this.render();
  }

  disconnectedCallback(): void {
    this.historyListen();
  }
}

customElements.define("mundart-navigation", MundartNavigation);
