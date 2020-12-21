import { html, render, TemplateResult } from "lit-html";
//@ts-ignore
import alinaContent from "./team-member-alina.md";
//@ts-ignore
import karinContent from "./team-member-karin.md";
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
  },
  {
    ...convert(karinContent),
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

  renderTeamMember(teamMember: TeamMember, index: number): TemplateResult {
    return html`<div class="uk-child-width-expand uk-grid-match" uk-grid="masonry: true">
      <div class="uk-width-1-3@s">
        <div class="uk-card uk-card-default uk-card-body">
          <img src="assets/team/${teamMember.photo}"></img>
        </div>
      </div>
      <div class="uk-width-2-3@s">
      <div class="uk-card uk-card-default uk-card-body">
        <h2 class="uk-card-title">${teamMember.name}</h2>
        <p>${teamMember.title}</p>
        <hr/>
        <div class="uk-flex uk-flex-center uk-text-lead" @click=${() =>
          this.readMoreClick(index)}>
          <span  style=${styleMap({
            transition: "all .5s linear",
          })} id="chevron-${index}" uk-icon="icon: chevron-down;ratio: 2"></span>
        </div>
        <div id="content-${index}" class="uk-hidden">
            <p>${teamMember.birthday}</p>
            ${unsafeHTML(teamMember.content)}
        </div>
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
