import React from "react";
import { Card } from "react-bootstrap";
import ButtonComponet from "../button/button";

function TaskCard(props) {
  return (
    <Card className="mr-2" style={{ width: "18rem",height:"200px" }}>
      <Card.Body>
        <Card.Title>{props.task}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.date}</Card.Subtitle>
        <Card.Text>
          {props.desc}
        </Card.Text>
        <ButtonComponet margin='2' content="update"/>
        <ButtonComponet content="delete"/>
      </Card.Body>
    </Card>
  );
}

export default TaskCard;
