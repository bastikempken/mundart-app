import { html, render } from "lit-html";
//@ts-ignore
import picture01 from "./assets/slideshow/picture_01_web.jpg";
//@ts-ignore
import picture02 from "./assets/slideshow/picture_02_web.jpg";

export default class Slideshow extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback(): void {
    const template = html`
      <div
        class="uk-position-relative uk-visible-toggle uk-light"
        tabindex="-1"
        uk-slideshow="autoplay: true;pause-on-hover: true; ratio: 7:3;max-height: 300;"
      >
        <ul class="uk-slideshow-items">
          <li>
            <img src=${picture01} alt="" uk-cover />
          </li>
          <li>
            <img src=${picture02} alt="" uk-cover />
          </li>
        </ul>

        <a
          class="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-previous
          uk-slideshow-item="previous"
        ></a>
        <a
          class="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next
          uk-slideshow-item="next"
        ></a>
      </div>
    `;
    render(template, this);
  }
}

customElements.define("header-slideshow", Slideshow);
