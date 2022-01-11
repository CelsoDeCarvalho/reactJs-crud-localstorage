import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { inputs } from "../../service/formInputs";
import ButtonComponet from "../button/button";

function UpdateForm(props) {

console.log(props)

  const [task, setTask] = useState({
    task: props.task,
    desc: "",
    eventDate: "",
    uuid: "",
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

    const tasks = JSON.parse(localStorage.getItem("react-crud-task"));

    tasks.push(task);

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
            value={task.name}
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

export default UpdateForm;
