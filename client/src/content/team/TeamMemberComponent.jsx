import React from "react";
import { connect } from "react-redux";
import { Card, Row, Col, ListGroup } from "react-bootstrap";
import Octicon, { ChevronDown, ChevronUp } from "@primer/octicons-react";

class TeamMemberInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false
    };
  }

  handleClick = () => {
    this.setState((state, props) => ({
      showInfo: !state.showInfo
    }));
  };

  evaluateInfoIcon = () => (this.state.showInfo ? ChevronUp : ChevronDown);

  render() {
    return (
      <React.Fragment>
        <div onClick={this.handleClick} style={{ textAlign: "center" }}>
          <Octicon icon={this.evaluateInfoIcon()} size="medium" />
        </div>
        {this.state.showInfo && (
          <React.Fragment>{this.props.text}</React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

class TeamMemberComponent extends React.Component {
  render() {
    return (
      <Row>
        <Col sm={4}>
          <img
            alt=""
            src={this.props.constants.picture}
            className={"img-thumbnail"}
            onLoad={this.props.picLoadedCallback}
          />
        </Col>
        <Col sm={8}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Card.Title>{this.props.constants.title}</Card.Title>
                  <Card.Text>{this.props.constants.shortText}</Card.Text>
                </ListGroup.Item>
                {this.props.constants.text && (
                  <ListGroup.Item>
                    <TeamMemberInformation text={this.props.constants.text} />
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default connect(
  undefined,
  undefined
)(TeamMemberComponent);
