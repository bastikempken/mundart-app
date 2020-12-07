import React from "react";
import { connect } from "react-redux";
import TeamMemberComponent from "./team/TeamMemberComponent";
import * as alinaConstants from "./team/AlinaConstants";
import * as wendlandConstants from "./team/WendlandConstants";
import * as schwaneckeConstants from "./team/SchwaneckeConstants";
import * as schaeferConstants from "./team/SchaeferConstants";
import * as monikaConstants from "./team/MonikaConstants";
import * as hundeConstants from "./team/HundeConstants";
import { LOADING_ON, LOADING_OFF } from "../reducers/action-types";

import { Container } from "react-bootstrap";

class TeamComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picLoaded: 0
    };
  }
  componentWillMount() {
    this.props.loadingOn();
  }

  componentDidUpdate() {
    if (this.state.picLoaded >= 6) {
      this.props.loadingOff();
    }
  }

  picLoadedCallback = () => {
    this.setState(state => {
      return {
        picLoaded: state.picLoaded + 1
      };
    });
  };

  render() {
    return (
      <Container>
        <h1>Team</h1>
        <TeamMemberComponent
          constants={alinaConstants}
          picLoadedCallback={this.picLoadedCallback}
        />
        <TeamMemberComponent
          constants={wendlandConstants}
          picLoadedCallback={this.picLoadedCallback}
        />
        <TeamMemberComponent
          constants={schwaneckeConstants}
          picLoadedCallback={this.picLoadedCallback}
        />
        <TeamMemberComponent
          constants={schaeferConstants}
          picLoadedCallback={this.picLoadedCallback}
        />
        <TeamMemberComponent
          constants={monikaConstants}
          picLoadedCallback={this.picLoadedCallback}
        />
        <TeamMemberComponent
          constants={hundeConstants}
          picLoadedCallback={this.picLoadedCallback}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadingOff: () => {
    dispatch({ type: LOADING_OFF });
  },
  loadingOn: () => {
    dispatch({ type: LOADING_ON });
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(TeamComponent);
