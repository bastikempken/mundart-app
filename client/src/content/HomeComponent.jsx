import React from "react";
import MundartLogo from "../media/vector.svg";
import DblLogo from "../media/logo-dbl.gif";

export const HomeComponent = () => (
  <>
    <div style={{ position: "relative" }}>
      <div className="col">
        <blockquote className={"blockquote text-center"}>
          <h1>Die Sprache ist die Kleidung der Gedanken</h1>
          <footer className={"blockquote-footer"}>Samuel Johnson</footer>
        </blockquote>
      </div>
      <p>
        Wem es schwer f&auml;llt zu sprechen, oder wer die M&ouml;glichkeit
        verliert sich auszudr&uuml;cken, der ist in unserer heutigen
        Gesellschaft h&auml;ufig eingeschr&auml;nkt. Unser Anliegen in der
        logop&auml;dischen Praxis mundArt ist es, Menschen Wege und
        M&ouml;glichkeiten aufzuweisen wieder mit ihren Mitmenschen zu
        kommunizieren. Daf&uuml;r steht Ihnen unser Team von ausgebildeten
        Logop&auml;den gerne unterst&uuml;tzend zur Seite.
      </p>
      <div style={{ textAlign: "center" }}>
        <img
          src={MundartLogo}
          width="300"
          href=""
          height=""
          className="d-inline-block align-top"
          alt="Mundart Logo"
        />
      </div>
      <div
        style={{ textAlign: "center", marginTop: "30px", marginBottom: "10px" }}
      >
        <a href={"https://www.dbl-ev.de/"}>
          <img
            src={DblLogo}
            width="200"
            href=""
            height=""
            className="d-inline-block align-top"
            alt="Dbl Logo"
          />
        </a>
      </div>
    </div>
  </>
);
