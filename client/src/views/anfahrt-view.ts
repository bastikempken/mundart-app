import { render, html } from "lit-html";

export default class AnfahrtView extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = html`
      <h1>Anfahrt</h1>
      <iframe
        title="Anfahrt Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.5282883811105!2d6.713631315243566!3d51.540211216125456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b89683c789f3e3%3A0xd3d0c0f6dd934674!2sR%C3%B6merstra%C3%9Fe+365A%2C+47178+Duisburg!5e0!3m2!1sde!2sde!4v1509044626606"
        width="100%"
        height="450"
        frameborder="0"
      />
    `;
    render(template, this);
  }
}

customElements.define("anfahrt-view", AnfahrtView);
