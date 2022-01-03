import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { inputs } from "../../service/formInputs";
import ButtonComponet from "../button/button";

function Formulario() {
  const [task, setTask] = useState({
    task: "",
    desc: "",
    eventDate: "",
    uuid:""
  });

  function uuid() {
    return ([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }  

  function onHandleChange(event) {
    const { name, value } = event.target;
    setTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function postTask() {
    if (task.task === "" || task.eventDate === "" || task.desc === "") {
      return "Prencha todos os campos";
    }

    task.uuid=uuid();
    var tasks = [];

    if (localStorage.getItem("react-crud-task")) {
      tasks = JSON.parse(localStorage.getItem("react-crud-task"));
      tasks.push(task);
    } else {
      tasks.push(task);
    }
    localStorage.setItem("react-crud-task", JSON.stringify(tasks));
    window.location.reload();
  }

  return (
    <div>
      {inputs.map((input, index) => (
        <Form.Group key={index} className="mb-3" controlId="formBasicEmail">
          <Form.Label>{input.formLabel}</Form.Label>
          <Form.Control
            onChange={(event) => onHandleChange(event)}
            type={input.valueType}
            name={input.name}
            placeholder={input.placeholder}
          />
        </Form.Group>
      ))}
      <div className="w-100 d-flex justify-content-end">
        <ButtonComponet onClick={() => postTask()} content="save" />
      </div>
    </div>
  );
}

export default Formulario;
