import React from "react";
import { connect } from "react-redux";
import { Spinner } from "react-bootstrap";
import Loader from "react-loader-advanced";

const delay = 3000;

class SpinnerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
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

export default connect(
    undefined,
    undefined
)(SpinnerComponent);
