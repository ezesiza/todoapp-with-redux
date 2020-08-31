import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../redux/selectors";

export type Props= {
  todos: [
     { [key: string]: number },
     
  ]
};

const TodoList:React.FC<Props>= ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length ? todos.map((todo, index) => {
        return <div key={`todo-${todo.id}`}>
          <Todo  todo={todo} />
        </div>;
      })
      : "No todos, yay!"}
  </ul>
);


const mapStateToProps = (state:any) => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };

};

export default connect(mapStateToProps)(TodoList);
