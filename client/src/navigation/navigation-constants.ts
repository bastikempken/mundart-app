export interface View {
  heading: string;
  urlHash: string;
}

export const home: View = { heading: "Home", urlHash: "/" };
export const neuigkeiten: View = {
  heading: "Neuigkeiten",
  urlHash: "/neugikeiten",
};
export const team: View = { heading: "Team", urlHash: "/team" };
export const praxis: View = { heading: "Praxis", urlHash: "/praxis" };
export const fragen: View = { heading: "Fragen", urlHash: "/fragen" };
export const tiergestuetzteTherapie: View = {
  heading: "Tiergestützte Therapie",
  urlHash: "/tiergestuetzteTherapie",
};
export const anfahrt: View = { heading: "Anfahrt", urlHash: "/anfahrt" };
export const kontakt: View = { heading: "Kontakt", urlHash: "/kontakt" };
export const impressum: View = { heading: "Impressum", urlHash: "/impressum" };
export const datenschutzerklaerung: View = {
  heading: "Datenschutzerklärung",
  urlHash: "/datenschutzerklaerung",
};
const links: View[] = [
  home,
  neuigkeiten,
  team,
  praxis,
  fragen,
  tiergestuetzteTherapie,
  anfahrt,
  kontakt,
  impressum,
  datenschutzerklaerung,
];

export enum NavigationEvent {
  ROOT = "ROOT",
  NEUIGKEITEN = "NEUIGKEITEN",
  TEAM = "TEAM",
  PRAXIS = "PRAXIS",
  FRAGEN = "FRAGEN",
  ANFAHRT = "ANFAHRT",
  CONTACT = "CONTACT",
  IMPRESSUM = "IMPRESSUM",
  DATENSCHUTZERKLAERUNG = "DATENSCHUTZERKLAERUNG",
  TIERGESCHUETZTE_THERAPIE = "TIERGESCHUETZTE_THERAPIE",
  UNKNOWN = "UNKNOWN",
}

export default links;
