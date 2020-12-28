//@ts-ignore
import Picture_01 from "../assets/praxis/picture_01_web.jpg";
//@ts-ignore
import Picture_02 from "../assets/praxis/picture_02_web.jpg";
//@ts-ignore
import Picture_03 from "../assets/praxis/picture_03_web.jpg";
//@ts-ignore
import Picture_04 from "../assets/praxis/picture_04_web.jpg";
//@ts-ignore
import Picture_05 from "../assets/praxis/picture_05_web.jpg";
//@ts-ignore
import Picture_06 from "../assets/praxis/picture_06_web.jpg";
//@ts-ignore
import Picture_07 from "../assets/praxis/picture_07_web.jpg";
//@ts-ignore
import Picture_08 from "../assets/praxis/picture_08_web.jpg";
//@ts-ignore
import Picture_09 from "../assets/praxis/picture_09_web.jpg";
//@ts-ignore
import Picture_10 from "../assets/praxis/picture_10_web.jpg";
//@ts-ignore
import Picture_11 from "../assets/praxis/picture_11_web.jpg";
//@ts-ignore
import Picture_12 from "../assets/praxis/picture_12_web.jpg";
//@ts-ignore
import Picture_13 from "../assets/praxis/picture_13_web.jpg";
//@ts-ignore
import Picture_14 from "../assets/praxis/picture_14_web.jpg";
//@ts-ignore
import Picture_17 from "../assets/praxis/picture_17_web.jpg";

//@ts-ignore
import Picture_thumb_01 from "../assets/praxis/thumb/picture_01_thumb.jpg";
//@ts-ignore
import Picture_thumb_02 from "../assets/praxis/thumb/picture_02_thumb.jpg";
//@ts-ignore
import Picture_thumb_03 from "../assets/praxis/thumb/picture_03_thumb.jpg";
//@ts-ignore
import Picture_thumb_04 from "../assets/praxis/thumb/picture_04_thumb.jpg";
//@ts-ignore
import Picture_thumb_05 from "../assets/praxis/thumb/picture_05_thumb.jpg";
//@ts-ignore
import Picture_thumb_06 from "../assets/praxis/thumb/picture_06_thumb.jpg";
//@ts-ignore
import Picture_thumb_07 from "../assets/praxis/thumb/picture_07_thumb.jpg";
//@ts-ignore
import Picture_thumb_08 from "../assets/praxis/thumb/picture_08_thumb.jpg";
//@ts-ignore
import Picture_thumb_09 from "../assets/praxis/thumb/picture_09_thumb.jpg";
//@ts-ignore
import Picture_thumb_10 from "../assets/praxis/thumb/picture_10_thumb.jpg";
//@ts-ignore
import Picture_thumb_11 from "../assets/praxis/thumb/picture_11_thumb.jpg";
//@ts-ignore
import Picture_thumb_12 from "../assets/praxis/thumb/picture_12_thumb.jpg";
//@ts-ignore
import Picture_thumb_13 from "../assets/praxis/thumb/picture_13_thumb.jpg";
//@ts-ignore
import Picture_thumb_14 from "../assets/praxis/thumb/picture_14_thumb.jpg";
//@ts-ignore
import Picture_thumb_17 from "../assets/praxis/thumb/picture_17_thumb.jpg";

import { render, html, TemplateResult } from "lit-html";

interface Picture {
  thumb: string;
  pic: string;
  title: string;
}

const pictures: Picture[] = [
  {
    thumb: Picture_thumb_01,
    pic: Picture_01,
    title: "Außenwerbung",
  },
  {
    thumb: Picture_thumb_02,
    pic: Picture_02,
    title: "Zugang zu eigenen Parkplätzen",
  },
  {
    thumb: Picture_thumb_03,
    pic: Picture_03,
    title: "",
  },
  {
    thumb: Picture_thumb_04,
    pic: Picture_04,
    title: "Eingangsbereich",
  },
  {
    thumb: Picture_thumb_05,
    pic: Picture_05,
    title: "Barrierefreier Eingangsbereich",
  },
  {
    thumb: Picture_thumb_06,
    pic: Picture_06,
    title: "Anmeldung",
  },
  {
    thumb: Picture_thumb_07,
    pic: Picture_07,
    title: "Wartebereich",
  },
  {
    thumb: Picture_thumb_17,
    pic: Picture_17,
    title: "Spielecke",
  },
  {
    thumb: Picture_thumb_08,
    pic: Picture_08,
    title: "Therapieraum 1",
  },
  {
    thumb: Picture_thumb_09,
    pic: Picture_09,
    title: "Therapieraum 2",
  },
  {
    thumb: Picture_thumb_10,
    pic: Picture_10,
    title: "Therapieraum 3",
  },
  {
    thumb: Picture_thumb_11,
    pic: Picture_11,
    title: "",
  },
  {
    thumb: Picture_thumb_12,
    pic: Picture_12,
    title: "",
  },
  {
    thumb: Picture_thumb_13,
    pic: Picture_13,
    title: "",
  },
  {
    thumb: Picture_thumb_14,
    pic: Picture_14,
    title: "",
  },
];

export default class PraxisView extends HTMLElement {
  constructor() {
    super();
  }

  private renderPic(): TemplateResult {
    return html``;
  }

  connectedCallback() {
    this.innerHTML = "<h1>Praxis</h1>";
  }
}

customElements.define("praxis-view", PraxisView);
