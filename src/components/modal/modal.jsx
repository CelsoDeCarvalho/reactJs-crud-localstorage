import React from "react";
import {Modal } from "react-bootstrap";
import Formulario from "../form/form";
import UpdateForm from "../form/updateForm";

function Dialog(props) {
  return (
    <Modal show={props.openModal} onHide={props.closeModal} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        {
          props.typeFunction === 'save'?
          <Modal.Title>Create task</Modal.Title>:
          <Modal.Title>Update task</Modal.Title>
        }
      </Modal.Header>
      <Modal.Body className="px-5">
        {
          props.typeFunction === 'save'?<Formulario/>:
          <UpdateForm id={props.id} task={props.task} date={props.date} desc={props.desc}/>
        }
      </Modal.Body>
    </Modal>
  );
}

export default Dialog;