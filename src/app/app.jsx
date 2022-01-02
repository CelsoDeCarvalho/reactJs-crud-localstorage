import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ButtonComponet from "../components/button/button";
import Dialog from "../components/modal/modal";
import TaskCard from "../components/taskCard/card";
import "./app.scss";

function App() {
  const[openModal,setOpenModal] = useState(false);
  const[tasks,setTasks] = useState([]);

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

  useEffect(() => {
      if(localStorage.getItem("react-crud-task")){
          setTasks(JSON.parse(localStorage.getItem("react-crud-task")))
      }
  }, [])

  return (
    <div className="app py-2">
      <Container className="w-100 h-100">
        <ButtonComponet onClick={()=>handleOpenModal()} content="Create task" />
        <div className="task-list pt-2">
          {tasks.length===0? noTask(): (
            tasks.map((task,index)=>(
                <TaskCard key={index}/>
            ))
          )}
        </div>
      </Container>

      <Dialog openModal={openModal} closeModal={()=>handleClosenModal()}/>
    </div>
  );
}

export default App;
