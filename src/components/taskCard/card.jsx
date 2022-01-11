import React, { useState } from "react";
import { Card } from "react-bootstrap";
import ButtonComponet from "../button/button";
import Dialog from "../modal/modal";

function TaskCard(props) {
  const[openModal,setOpenModal] = useState(false);

  function handleOpenModal(){
    setOpenModal(true);
} 

function handleClosenModal(){
  setOpenModal(false);
} 

  return (
    <Card className="mr-2" style={{ width: "18rem",height:"200px" }}>
      <Card.Body>
        <Card.Title>{props.task}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.date}</Card.Subtitle>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <ButtonComponet onClick={()=>handleOpenModal()} margin='2' content="update"/>
        <ButtonComponet onClick={props.deleteFunction} content="delete"/>
        <Dialog id={props.id} task={props.task} desc={props.desc} date={props.date}  typeFunction='update' openModal={openModal} closeModal={()=>handleClosenModal()}/>
      </Card.Body>
    </Card>
  );
}

export default TaskCard;
