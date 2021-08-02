import React from "react";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";
import Loader from "react-loader-advanced";
import { LOADING_OFF } from "./reducers/action-types";
import { navigateToError } from "./AppRouter";

const delay = 3000;
const maxSecTimeoutForErrorPage = 8000;

class SpinnerComponent extends React.Component {
  handleCallback = () => {
    if (this.props.show) {
      setTimeout(() => {
        if (this.props.show) {
          navigateToError();
          this.props.loadingOff();
        }
      }, maxSecTimeoutForErrorPage);
    }
  };

  componentDidUpdate() {
    this.handleCallback();
  }

  render() {
    return (
      <>
        <Loader
          show={this.props.show}
          message={<Spinner animation="grow" variant="primary" />}
          backgroundStyle={{
            backgroundColor: "white",
            position: "fixed",
            zIndex: 400
          }}
          hideContentOnLoad={true}
          transitionConfig={{
            transitionName: "",
            transitionEnterTimeout: 1,
            transitionLeaveTimeout: delay
          }}
        >
          {this.props.children}
        </Loader>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadingOff: () => {
    dispatch({ type: LOADING_OFF });
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(SpinnerComponent);
