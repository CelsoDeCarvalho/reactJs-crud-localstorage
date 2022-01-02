import React from "react";
import { Button, Modal } from "react-bootstrap";

function Dialog(props) {
  return (
    <Modal show={props.openModal} onHide={props.closeModal} backdrop="static" keyboard={false}>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        I will not close if you click outside me. Don't even try to press escape
        key.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.closeModal}>
          Close
        </Button>
        <Button variant="primary">Understood</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Dialog;