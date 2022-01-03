import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { inputs } from "../../service/formInputs";
import ButtonComponet from "../button/button";

function Formulario() {
  const [task, setTask] = useState({
    task: "",
    desc: "",
    eventDate: "",
  });

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
