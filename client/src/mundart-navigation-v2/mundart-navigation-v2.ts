import { html, render } from "lit-html";
//import css from "./mundart-navigation-v2.scss";

export default class MundartNavigationV2 extends HTMLElement {
  constructor() {
    super();
    //this.attachShadow({ mode: "open" });
  }

  connectedCallback(): void {
    const templateDummy = html` <nav class="navigationbar">
      <input type="checkbox" id="check" />
      <label for="check" class="navigationbar__burger">
        <i class="fa fa-bars"></i>
      </label>

      <!-- 
      <label class="navigationbar__logo">Mundart</label>
      -->
      <!-- <div class="navigationbar__logo"><img src="assets/company-logo.svg"></img></div>-->
      <ul class="navigationbar__nav">
        <li class="navigationbar__item">
          <a class="navigationbar__link" href="#News">News</a>
        </li>
        <li class="navigationbar__item">
          <a class="navigationbar__link" href="#Team">Team</a>
        </li>
        <li class="navigationbar__item">
          <a class="navigationbar__link" href="#Praxis">Praxis</a>
        </li>
      </ul>
    </nav>`;
    render(templateDummy, this);
  }
}

customElements.define("mundart-navigation-v2", MundartNavigationV2);
