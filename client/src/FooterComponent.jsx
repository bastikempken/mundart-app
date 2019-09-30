import React from "react";
import { connect } from "react-redux";
import { MDBContainer } from "mdbreact";

class FooterComponet extends React.Component {
  render() {
    return (
      <>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()}{" "}
            {"Copyright: mundart-sprachtherapie.de"}
          </MDBContainer>
        </div>
      </>
    );
  }
}

export default connect(
  undefined,
  undefined
)(FooterComponet);
