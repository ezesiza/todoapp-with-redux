import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_FILTER,
  EDIT_TODO,
  TodoActionTypes,
} from "./actionTypes";

let nextTodoId = 0;

export const addTodo=(content:object): TodoActionTypes =>{
  return {
    type: ADD_TODO,
    payload: {
      id: ++nextTodoId,
      content,
    },
  };
}

export const delayAdd=(content:object):any=>{

return function (dispatch) {
  setTimeout(() => {
    dispatch({ type: 'ADD_TODO', payload:{
      id:++nextTodoId,
      content
    } })
  }, 5000);
}
}

export const toggleTodo = (id:string) => {
  return {
    type: TOGGLE_TODO,
    payload: { id },
  };
}
export const editTodo = (id:string, content:string)=> {

  return {
    type: EDIT_TODO,
    payload: { id , content},
  };
}

export const setFilter=(filter:object)=> {
  return {
    type: SET_FILTER,
    payload: { filter },
  };
}
