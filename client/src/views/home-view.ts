export default class HomeView extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = "<h1>Home</h1>";
  }
}

customElements.define("home-view", HomeView);
