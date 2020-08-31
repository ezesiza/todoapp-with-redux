import React, { useState, ChangeEvent, FormEvent } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo, editTodo } from "../redux/actions";
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

interface InputData {
  content: string;
  id?:number
 
}


const Todo= ({ todo, toggleTodo, editTodo }) => {
  const [input, setInput] = useState(" ");
  
  const handleEdit = (e: InputData)=>{
     setInput(e.content);
    const eze = editTodo(e.id, e.content);
    
  }

return (

<ListGroup>
    <ListGroupItem >{todo && todo.completed ? "👌" : "👋"}{" "}{todo.content}
      <div>
        <Button onClick={() => toggleTodo(todo.id)}>Toggle List</Button>
        {" "}
        <Button color="secondary" onClick={() => handleEdit(todo)}>Edit Todo</Button>{' '}
      </div>
    </ListGroupItem>
  </ListGroup>
  
  )
};

export default connect(null, { toggleTodo, editTodo })(Todo);
