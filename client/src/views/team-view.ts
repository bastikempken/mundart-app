export default class TeamView extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = "<h1>Team</h1>";
  }
}

customElements.define("team-view", TeamView);
