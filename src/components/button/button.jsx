import React from "react";
import { Button } from "react-bootstrap";

function ButtonComponet(props){
    return <Button onClick={props.onClick}  variant="primary">{props.content}</Button>
}

export default ButtonComponet;