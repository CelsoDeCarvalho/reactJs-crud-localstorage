import React from "react";
import {Modal } from "react-bootstrap";
import Formulario from "../form/form";

function Dialog(props) {
  return (
    <Modal show={props.openModal} onHide={props.closeModal} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Create task</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-5">
        <Formulario/>
      </Modal.Body>
    </Modal>
  );
}

export default Dialog;