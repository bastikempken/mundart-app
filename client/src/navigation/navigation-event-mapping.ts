import {
  NavigationEvent,
  home,
  anfahrt,
  datenschutzerklaerung,
  fragen,
  impressum,
  kontakt,
  neuigkeiten,
  praxis,
  team,
  tiergestuetzteTherapie,
} from "./navigation-constants";

export const mapping = (pathname: string): NavigationEvent => {
  let event;
  switch (pathname) {
    case home.urlHash:
      event = NavigationEvent.ROOT;
      break;
    case anfahrt.urlHash:
      event = NavigationEvent.ANFAHRT;
      break;
    case datenschutzerklaerung.urlHash:
      event = NavigationEvent.DATENSCHUTZERKLAERUNG;
      break;
    case fragen.urlHash:
      event = NavigationEvent.FRAGEN;
      break;
    case impressum.urlHash:
      event = NavigationEvent.IMPRESSUM;
      break;
    case kontakt.urlHash:
      event = NavigationEvent.CONTACT;
      break;
    case neuigkeiten.urlHash:
      event = NavigationEvent.NEUIGKEITEN;
      break;
    case praxis.urlHash:
      event = NavigationEvent.PRAXIS;
      break;
    case team.urlHash:
      event = NavigationEvent.TEAM;
      break;
    case tiergestuetzteTherapie.urlHash:
      event = NavigationEvent.TIERGESCHUETZTE_THERAPIE;
      break;
    default:
      event = NavigationEvent.UNKNOWN;
      break;
  }
  return event;
};
