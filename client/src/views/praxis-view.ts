interface Picture {
  thumb: string;
  pic: string;
  title: string;
}

const pictures: Picture[] = [
  {
    thumb: "",
    pic: "",
    title: "",
  },
];

export default class PraxisView extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = "<h1>Praxis</h1>";
  }
}

customElements.define("praxis-view", PraxisView);
