import React, { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap';
import {  editTodo } from "./redux/actions";


interface InputData {
  content: string;
  id?:string
}

const TodoApp: React.FC = () => {

  return (
    <div className="todo-app">
      <><Container className="themed-container">
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList />
        <VisibilityFilters />
      </Container></>
    </div>
  );
};

export default TodoApp;
