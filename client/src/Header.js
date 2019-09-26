import React from "react";
import Picture_01 from "./media/header/picture_01_web.jpg";
import Picture_02 from "./media/header/picture_02_web.jpg";
import Picture_03 from "./media/header/picture_03_web.jpg";
import Picture_04 from "./media/header/picture_04_web.jpg";
import Picture_05 from "./media/header/picture_05_web.jpg";
import Picture_06 from "./media/header/picture_06_web.jpg";
import Picture_07 from "./media/header/picture_07_web.jpg";
import Picture_08 from "./media/header/picture_08_web.jpg";
import { Carousel } from "react-bootstrap";
import { connect } from "react-redux";
import { LOADING_OFF } from "./reducers/action-types";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictureLoaded: 0
        };
    }

    sendPicLoad = () => {
        this.setState({ pictureLoaded: this.state.pictureLoaded + 1 }, () => {
            if (this.state.pictureLoaded === 8) {
                this.props.sendPicLoad();
            }
        });
    };

    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Picture_01}
                        alt=""
                        onLoad={this.sendPicLoad}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Picture_02}
                        alt=""
                        onLoad={this.sendPicLoad}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Picture_03}
                        alt=""
                        onLoad={this.sendPicLoad}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Picture_04}
                        alt=""
                        onLoad={this.sendPicLoad}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Picture_05}
                        alt=""
                        onLoad={this.sendPicLoad}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Picture_06}
                        alt=""
                        onLoad={this.sendPicLoad}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Picture_07}
                        alt=""
                        onLoad={this.sendPicLoad}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Picture_08}
                        alt=""
                        onLoad={this.sendPicLoad}
                    />
                </Carousel.Item>
            </Carousel>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    sendPicLoad: () => {
        dispatch({ type: LOADING_OFF });
    }
});

export default connect(
    undefined,
    mapDispatchToProps
)(Header);