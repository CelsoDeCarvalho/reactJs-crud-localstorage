import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ButtonComponet from "../components/button/button";
import Dialog from "../components/modal/modal";
import "./app.scss";

function App() {
  const tasks = [];

  const[openModal,setOpenModal] = useState(false);

  function handleOpenModal(){
      setOpenModal(true);
  } 

  function handleClosenModal(){
    setOpenModal(false);
} 

  function noTask() {
    return (
      <div className="text-muted no-task">
        <span>NO TASK</span>
      </div>
    );
  }

  return (
    <div className="app py-2">
      <Container className="w-100 h-100">
        <ButtonComponet onClick={()=>handleOpenModal()} content="Create task" />
        <div className="task-list">
          {tasks.length===0? noTask(): (
            <h1>Nao esta vazio</h1>
          )}
        </div>
      </Container>

      <Dialog openModal={openModal} closeModal={()=>handleClosenModal()}/>
    </div>
  );
}

export default App;
