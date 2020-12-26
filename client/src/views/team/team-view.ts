import { html, render, TemplateResult } from "lit-html";
//@ts-ignore
import alinaContent from "./team-member-alina.md";
//@ts-ignore
import alinaBild from "../../assets/team/alina.jpg";
//@ts-ignore
import karinContent from "./team-member-karin.md";
//@ts-ignore
import karinBild from "../../assets/team/karin.jpg";
//@ts-ignore
import franziskaBild from "../../assets/team/franziska.jpg";
//@ts-ignore
import franziskaContent from "./team-member-franziska.md";
//@ts-ignore
import schaeferBild from "../../assets/team/schaefer.jpg";
//@ts-ignore
import schaeferContent from "./team-member-schaefer.md";
//@ts-ignore
import monikaBild from "../../assets/team/monika.jpg";
//@ts-ignore
import monikaContent from "./team-member-monika.md";
//@ts-ignore
import hundeBild from "../../assets/team/hunde.jpg";
//@ts-ignore
import hundeContent from "./team-member-hunde.md";

import { unsafeHTML } from "lit-html/directives/unsafe-html";
import { styleMap } from "lit-html/directives/style-map";
import { convert } from "./markdown-adapter";

export interface TeamMember {
  name: string;
  photo: string;
  title: string;
  birthday: string;
  content: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    ...convert(alinaContent),
    photo: alinaBild,
  },
  {
    ...convert(karinContent),
    photo: karinBild,
  },
  {
    ...convert(franziskaContent),
    photo: franziskaBild,
  },
  {
    ...convert(schaeferContent),
    photo: schaeferBild,
  },
  {
    ...convert(monikaContent),
    photo: monikaBild,
  },
  {
    ...convert(hundeContent),
    photo: hundeBild,
  },
];

export default class TeamView extends HTMLElement {
  constructor() {
    super();
  }

  readMoreClick(index: number) {
    const moreContent: HTMLElement = this.querySelector("#content-" + index);
    const chevronContent: HTMLElement = this.querySelector("#chevron-" + index);
    moreContent.classList.toggle("uk-hidden");
    moreContent.classList.toggle("uk-animation-fade");
    if (chevronContent.style.transform === "") {
      chevronContent.style.transform = "rotate(180deg)";
    } else {
      chevronContent.style.transform = "";
    }
  }

  private renderChevron(index) {
    return html`
      <div
        class="uk-flex uk-flex-center uk-text-lead"
        @click=${() => this.readMoreClick(index)}
      >
        <span
          style=${styleMap({
            transition: "all .5s linear",
          })}
          id="chevron-${index}"
          uk-icon="icon: chevron-down;ratio: 2"
        ></span>
      </div>
    `;
  }

  private renderReadMoreContent(teamMember, index) {
    return html`
      <div id="content-${index}" class="uk-hidden">
        ${teamMember.birthday !== ""
          ? html`
              <p>${teamMember.birthday}</p>
              ${unsafeHTML(teamMember.content)}
            `
          : unsafeHTML(teamMember.content)}
      </div>
    `;
  }

  renderTeamMember(teamMember: TeamMember, index: number): TemplateResult {
    return html`<div class="uk-child-width-expand uk-grid-match" uk-grid="masonry: true">
      <div class="uk-width-1-3@s">
        <div class="uk-card uk-card-default uk-card-body">
          <img src="${teamMember.photo}"></img>
        </div>
      </div>
      <div class="uk-width-2-3@s">
      <div class="uk-card uk-card-default uk-card-body">
        <h2 class="uk-card-title">${teamMember.name}</h2>
        <p>${teamMember.title}</p>
        ${
          teamMember.content !== ""
            ? html`
                <hr />
                ${this.renderChevron(index)}
                ${this.renderReadMoreContent(teamMember, index)}
              `
            : ""
        }
    </div>`;
  }

  connectedCallback() {
    const template: TemplateResult = html`
      <h1>Team</h1>
      ${TEAM_MEMBERS.map((teamMember: TeamMember, index: number) => {
        return this.renderTeamMember(teamMember, index);
      })}
    `;
    render(template, this);
  }
}

customElements.define("team-view", TeamView);
