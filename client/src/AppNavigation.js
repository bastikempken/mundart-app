import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import * as appRouter from "./AppRouter";
import { connect } from "react-redux";
import history from "./utils/history";
import * as naviConstants from "./utils/navi-constants";
import Sticky from "react-sticky-el";
import MundartLogo from "./media/vector_navi.svg";

class AppNavigation extends React.Component {
  handleNaviClick = navigate => {
    navigate();
    this.forceUpdate();
  };

  handleActiveLink = pathname =>
    history.location.pathname === pathname ? "active" : "";

  render() {
    return (
      <Sticky>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="">
            <img
              src={MundartLogo}
              onClick={() => this.handleNaviClick(appRouter.navigateToHome)}
              width="100"
              href=""
              height=""
              className="d-inline-block align-top"
              alt="Mundart Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ height: "100% !important" }}
          >
            <Nav className="mr-auto">
              <Nav.Link
                className={
                  this.handleActiveLink(naviConstants.home) ||
                  this.handleActiveLink(naviConstants.root)
                }
                onClick={() => this.handleNaviClick(appRouter.navigateToHome)}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className={this.handleActiveLink(naviConstants.team)}
                onClick={() => this.handleNaviClick(appRouter.navigateToTeam)}
              >
                Team
              </Nav.Link>
              <Nav.Link
                className={this.handleActiveLink(naviConstants.karriere)}
                onClick={() => this.handleNaviClick(appRouter.navigateToKarriere)}
              >
                Karriere
              </Nav.Link>
              <Nav.Link
                className={this.handleActiveLink(naviConstants.praxis)}
                onClick={() => this.handleNaviClick(appRouter.navigateToPraxis)}
              >
                Praxis
              </Nav.Link>
              <Nav.Link
                className={this.handleActiveLink(naviConstants.fragen)}
                onClick={() => this.handleNaviClick(appRouter.navigateToFragen)}
              >
                Fragen
              </Nav.Link>
              <Nav.Link
                className={this.handleActiveLink(
                  naviConstants.tiergestuetzte_therapie
                )}
                onClick={() =>
                  this.handleNaviClick(
                    appRouter.navigateToTiergestuetzteTherapie
                  )
                }
              >
                Tiergestützte Therapie
              </Nav.Link>
              <Nav.Link
                className={this.handleActiveLink(naviConstants.anfahrt)}
                onClick={() =>
                  this.handleNaviClick(appRouter.navigateToAnfahrt)
                }
              >
                Anfahrt
              </Nav.Link>
              <Nav.Link
                className={this.handleActiveLink(naviConstants.kontakt)}
                onClick={() =>
                  this.handleNaviClick(appRouter.navigateToKontakt)
                }
              >
                Kontakt
              </Nav.Link>
              <Nav.Link
                className={this.handleActiveLink(naviConstants.impressum)}
                onClick={() =>
                  this.handleNaviClick(appRouter.navigateToImpressum)
                }
              >
                Impressum
              </Nav.Link>
              <Nav.Link
                className={this.handleActiveLink(naviConstants.datenschutz)}
                onClick={() =>
                  this.handleNaviClick(appRouter.navigateToDatenschutz)
                }
              >
                Datenschutzerkl&auml;rung
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Sticky>
    );
  }
}

export default connect(
  undefined,
  undefined
)(AppNavigation);
