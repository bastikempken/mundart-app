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
      <hr/>
      <div>
        <p className={"text-center"}><b>CORONAVIRUS SCHUTZMAßNAHMEN</b></p>
        <p>
          Da Experten davon ausgehen, dass uns die Corona-Krise noch mindestens
          1 Jahr begleiten wird, hier einige Punkte, wie wir in unserer Praxis
          auf die neue Situation reagieren:
          <ul>
            <li>
              Bitte sofort nach Eintritt in die Praxis die
              <b>Hände ca. 30 Sek. mit Wasser und Seife waschen</b> oder mit dem
              von uns bereit gestellten Desinfektionsmitel desinfizieren.
            </li>
            <li>
              <b>Fassen Sie sich nicht ins Gesicht!</b>
            </li>
            <li>
              <b>Niesen oder husten Sie in die Armbeuge!</b>
            </li>
            <li>
              <b>Abstand halten!</b> Gerade im Wartebereich bitte darauf achten.
            </li>
            <li>
              Kommen Sie <b>pünktlich zum vereinbarten Termin</b>. Bringen Sie
              keine Geschwisterkinder mit und höchstens eine Begleitperson pro
              zu therapierendes Kind.
            </li>
            <li>
              Bleiben Sie <b>zuhause</b> wenn sie direkten Kontakt zu einer
              infizierten Person hatten oder folgende Symptome aufweisen:
              Halskratzen, Husten, Fieber.
            </li>
            <li>
              Wenn Sie sich krank fühlen, rufen Sie entweder Ihren <b>Hausarzt</b> an <b>oder 116 117</b>
            </li>
          </ul>
          Wir bedanken uns bei ihrer Mithilfe!
Logopädische Praxis Krähahn

        </p>
      </div>
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
