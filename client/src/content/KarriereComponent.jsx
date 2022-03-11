import React from "react";
import { connect } from "react-redux";

class AnfahrtComponent extends React.Component {
  render() {
    return (
      <>
        <h1>Wir stellen ein</h1>
        <p>Eine tolle Chance in Duisburg – Walsum<br/><br/>
          Wir suchen ab sofort eine Logopädin (m/w/d) mit Freude an diesem tollen Beruf <br/> Das Volumen der Stelle ist frei wählbar
          <br/>
          <br/>
          <strong>Bei uns gibt es:</strong>
          <ul>
            <li> Unterstützung durch ein tolles Team</li>
            <li> flexible Arbeitszeiten; alles kann, nichts muss</li>
            <li> (gemeinsame) bezahlte Fortbildungen</li>
            <li> faire Bezahlung; Einstieg bei mindestens 3400€ bei einer vollen Stelle</li>
            <li> Pauschale von 8€ pro Hausbesuch</li>
            <li> 30 Urlaubstage und 2 Fortbildungstage</li>
            <li> eine 2017 komplett neu sanierte, helle Praxis mit großzügigen Therapieräumen</li>
            <li> einen eigenen Therapieraum</li>
          </ul>
          <strong>Wir fänden klasse:</strong>
          <ul>
            <li>einen eigenen PKW für Hausbesuche</li>
            <li>Eigenverantwortlichkeit in der Terminplanung</li>
            <li>Freude am Beruf</li>
          </ul>
          <b>Interesse?</b> Auf allen Kanälen sind wir ab sofort erreichbar und gestalten dann hoffentlich bald zusammen Ihre Traum-Arbeitsstelle aus!<br/><br/>
          telefonisch: 0203/93451097 oder 01704917479<br/>
          per mail: mundart-sprachtherapie@web.de<br/>
          Kontaktformular auf der HP: www.mundart-sprachtherapie.de<br/>
          oder per Post: A. Krähahn, Römerstraße 365a, 47178 Duisburg
        </p>

      </>
    );
  }
}

export default connect(
  undefined,
  undefined
)(AnfahrtComponent);
