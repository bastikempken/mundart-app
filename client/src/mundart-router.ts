import { NavigationEvent } from "./navigation/navigation-constants";
import { mapping } from "./navigation/navigation-event-mapping";
import HomeView from "./views/home-view";
import TeamView from "./views/team-view";
import TierTherapieView from "./views/tier-therapie-view/tier-therapie-view";
import history from "history/browser";

export class MundartRouter extends HTMLElement {
  private oldView: HTMLElement;

  constructor() {
    super();
    this.show(mapping(history.location.pathname));
    document.addEventListener("mundart-nav", (event: CustomEvent) => {
      const navigationEvent: NavigationEvent = event.detail.navigationEvent;
      console.log("TEAM", navigationEvent);
      this.show(navigationEvent);
    });
  }

  show(navigationEvent: NavigationEvent): void {
    let view;

    switch (navigationEvent) {
      case NavigationEvent.ROOT:
        view = new HomeView();
        break;
      case NavigationEvent.TEAM:
        view = new TeamView();
        break;
      case NavigationEvent.TIERGESCHUETZTE_THERAPIE:
        view = new TierTherapieView();
        break;
      default:
        view = new HomeView();
    }

    if (this.oldView) {
      this.replaceChild(view, this.oldView);
    } else {
      this.appendChild(view);
    }
    this.oldView = view;
  }
}

customElements.define("mundart-router", MundartRouter);
