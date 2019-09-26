import React from 'react';
import { connect } from "react-redux";
import './App.css';
import SpinnerComponent from "./components/SpinnerComponent";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <SpinnerComponent show={this.props.loading}>
                    <Header/>
                </SpinnerComponent>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.loading
});

export default connect(
    mapStateToProps,
    undefined
)(App);