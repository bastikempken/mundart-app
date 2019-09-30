import React from "react";
import { connect } from "react-redux";

class HomeComponent extends React.Component {
  render() {
    return (
      <>
        <blockquote class="blockquote text-center">
          <p class="mb-0 ext-muted">
            <div>
              <h1>Die Sprache ist die Kleidung der Gedanken</h1>
            </div>
          </p>
          <footer class="blockquote-footer">Samuel Johnson</footer>
        </blockquote>

        <p>
          Wem es schwer f&auml;llt zu sprechen, oder wer die M&ouml;glichkeit
          verliert sich auszudr&uuml;cken, der ist in unserer heutigen
          Gesellschaft h&auml;ufig eingeschr&auml;nkt. Unser Anliegen in der
          logop&auml;dischen Praxis mundArt ist es, Menschen Wege und
          M&ouml;glichkeiten aufzuweisen wieder mit ihren Mitmenschen zu
          kommunizieren. Daf&uuml;r steht Ihnen unser Team von ausgebildeten
          Logop&auml;den gerne unterst&uuml;tzend zur Seite.
        </p>
      </>
    );
  }
}

export default connect(
  undefined,
  undefined
)(HomeComponent);
