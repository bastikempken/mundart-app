import React from "react";
import { Router, Route, Switch } from "react-router";
import HomeComponent from "./content/HomeComponent";
import TeamComponent from "./content/TeamComponent";
import NewsComponent from "./content/NewsComponent";
import PraxisComponent from "./content/PraxisComponent";
import FragenComponent from "./content/FragenComponent";
import TierTherapieComponent from "./content/TierTherapieComponent";
import AnfahrtComponent from "./content/AnfahrtComponent";
import KontaktComponent from "./content/KontaktComponent";
import history from "./utils/history";
import * as naviConstants from "./utils/navi-constants";
import { connect } from "react-redux";

class AppRouter extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path={naviConstants.news} component={NewsComponent} />
          <Route path={naviConstants.team} component={TeamComponent} />
          <Route path={naviConstants.praxis} component={PraxisComponent} />
          <Route path={naviConstants.fragen} component={FragenComponent} />
          <Route
            path={naviConstants.tiergestuetzte_therapie}
            component={TierTherapieComponent}
          />
          <Route path={naviConstants.anfahrt} component={AnfahrtComponent} />
          <Route path={naviConstants.kontakt} component={KontaktComponent} />
          <Route path={naviConstants.root} component={HomeComponent} />
        </Switch>
      </Router>
    );
  }
}

const navigateTo = path => {
  history.push(path);
};

export const navigateToHome = () => {
  navigateTo(naviConstants.home);
};

export const navigateToNews = () => {
  navigateTo(naviConstants.news);
};

export const navigateToTeam = () => {
  navigateTo(naviConstants.team);
};

export const navigateToPraxis = () => {
  navigateTo(naviConstants.praxis);
};

export const navigateToFragen = () => {
  navigateTo(naviConstants.fragen);
};

export const navigateToTiergestuetzteTherapie = () => {
  navigateTo(naviConstants.tiergestuetzte_therapie);
};

export const navigateToKontakt = () => {
  navigateTo(naviConstants.kontakt);
};

export const navigateToAnfahrt = () => {
  navigateTo(naviConstants.anfahrt);
};

export default connect(
  undefined,
  undefined
)(AppRouter);
