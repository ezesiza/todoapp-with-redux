import React, { useState, useEffect, createRef } from "react";
import { connect } from "react-redux";
import { toggleTodo, editTodo } from "../redux/actions";
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import store from './../redux/store'

interface InputData {
  content: string;
  id?:number
}


const Todo= ({ todo, toggleTodo, editTodo }) => {
 
  const handleEdit = (e: InputData)=>{
    const stor = store.getState().todos.allIds.find(id=>(id===e.id));
    editTodo(e.id, e.content);
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
