import { NavigationEvent } from "./navigation/navigation-constants";
import { mapping } from "./navigation/navigation-event-mapping";
import HomeView from "./views/home-view";
import ContactView from "./views/contact-view";
import FragenView from "./views/fragen/fragen-view";
import TeamView from "./views/team/team-view";
import PraxisView from "./views/praxis-view";
import AnfahrtView from "./views/anfahrt-view";
import TierTherapieView from "./views/tier-therapie-view/tier-therapie-view";
import history from "history/browser";

export class MundartRouter extends HTMLElement {
  private oldView: HTMLElement;

  constructor() {
    super();
    this.show(mapping(history.location.pathname));
    document.addEventListener("mundart-nav", (event: Event) => {
      const navigationEvent: NavigationEvent = (<CustomEvent>event).detail
        .navigationEvent;
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
      case NavigationEvent.TEAM:
        view = new TeamView();
        break;
      case NavigationEvent.CONTACT:
        view = new ContactView();
        break;
      case NavigationEvent.ANFAHRT:
        view = new AnfahrtView();
        break;
      case NavigationEvent.FRAGEN:
        view = new FragenView();
        break;
      case NavigationEvent.PRAXIS:
        view = new PraxisView();
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
