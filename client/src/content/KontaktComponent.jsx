import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { EMAIL_REQUEST } from "../reducers/action-types";
import ConfirmModal from "./kontakt/Modal";
import FacebookLogo from "../media/facebook-logo.png";

class KontaktComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: "",
        valid: true
      },
      sender: {
        value: "",
        valid: true
      },
      content: {
        value: "",
        valid: true
      },
      showModal: false
    };
  }

  handleNameChange = e =>
    this.setState({
      name: {
        value: e.target.value,
        valid: true
      }
    });

  handleSenderChange = e =>
    this.setState({
      sender: {
        value: e.target.value,
        valid: true
      }
    });

  handleContentChange = e =>
    this.setState({
      content: {
        value: e.target.value,
        valid: true
      }
    });

  handleButtonSubmit = event => {
    event.preventDefault();
    if (this.validateForm()) {
      this.props.dispatch({
        name: this.state.name.value,
        sender: this.state.sender.value,
        content: this.state.content.value
      });
      this.handleModalVisibility(true);
    }
  };

  validateForm = () => {
    return this.validateName() & this.validateSender() & this.validateContent();
  };

  validateName = () => {
    if (this.state.name.value === "") {
      this.setState(state => ({
        name: {
          value: state.name.value,
          valid: false
        }
      }));
      return false;
    }
    return true;
  };

  validateSender = () => {
    if (this.state.sender.value === "") {
      this.setState(state => ({
        sender: {
          value: state.sender.value,
          valid: false
        }
      }));
      return false;
    }
    return true;
  };

  validateContent = () => {
    if (this.state.content.value === "") {
      this.setState(state => ({
        content: {
          value: state.content.value,
          valid: false
        }
      }));
      return false;
    }
    return true;
  };

  handleModalVisibility = modalVisibility => {
    this.setState(state => ({
      showModal: modalVisibility
    }));
  };

  render() {
    return (
      <>
        <h1>Kontakt</h1>
        <h2>Adresse</h2>
        <p>
          Römerstraße 365 A<br />
          47178 Duisburg
        </p>
        <h2>Öffnungszeiten</h2>
        <p>
          Montag - Donnerstag: 08:00 – 18:30
          <br />
          Freitag: 08:00 – 17:00
          <br /> Samstag: geschlossen
          <br /> Sonntag: geschlossen
        </p>
        <h2>Telefon</h2>
        <p>
          Telefon: +49 203/93451097
          <br />
          Telefax: +49 203/93451098
          <br />
          Mobil: +49 170/4917479 <br />
        </p>
        <h2>Social Media</h2>
        <div style={{ paddingBottom: "30px" }}>
          <img
            alt="https://www.facebook.com/logopaediekraehahn/"
            src={FacebookLogo}
            className={"img-thumbnail"}
          />
        </div>

        <h2>Email</h2>
        <ConfirmModal
          show={this.state.showModal}
          handleClose={() => this.handleModalVisibility(false)}
        />
        <Form>
          <Form.Group>
            <Form.Label>Name*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name eingeben"
              onChange={this.handleNameChange}
              value={this.state.name.value}
              isInvalid={!this.state.name.valid}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email eingeben"
              onChange={this.handleSenderChange}
              value={this.state.sender.value}
              isInvalid={!this.state.sender.valid}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nachricht*</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Nachricht eingeben"
              onChange={this.handleContentChange}
              value={this.state.content.value}
              isInvalid={!this.state.content.valid}
            />
          </Form.Group>
          <Button variant="primary" onClick={this.handleButtonSubmit}>
            Abschicken
          </Button>
        </Form>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch: payload => {
    dispatch({ type: EMAIL_REQUEST, payload });
  }
});

export default connect(
  undefined,
  mapDispatchToProps
)(KontaktComponent);
