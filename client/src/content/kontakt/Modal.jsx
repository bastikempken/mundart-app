import React from "react";
import { Modal, Button } from "react-bootstrap";

const ConfirmModal = props => (
  <>
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Nachricht erfolgreich versendet</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Ihre Nachricht wurde erfolgreich versendet. Sie erhalten eine
        Bestätigung per Email und wir werden uns in Kürze bei Ihnen melden.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.handleClose}>
          Schließen
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);

export default ConfirmModal;
