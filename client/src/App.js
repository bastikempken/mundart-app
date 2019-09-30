import React from 'react';
import { connect } from "react-redux";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "lightbox2/dist/css/lightbox.min.css"
import SpinnerComponent from "./components/SpinnerComponent";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.css";
import AppNavigation from "./AppNavigation";
import AppRouter from "./AppRouter";
import FooterComponent from "./FooterComponent";

class App extends React.Component {

    componentWillUpdate() {
        setTimeout(function () {
            const carousel = document.getElementsByClassName("carousel")[0];
            const pageOffset = carousel.offsetHeight * 0.9;
            const content = document.getElementById("content");
            content.style.minHeight = `${pageOffset}px`;
            window.scroll(0, pageOffset);
        }, 3000);
    }

    render() {
        return (
            <div className="App">
                <SpinnerComponent show={this.props.loading}>
                    <Header/>
                    <AppNavigation/>
                    <div id="content">
                        <AppRouter/>
                    </div>
                    <FooterComponent />
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