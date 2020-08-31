export const ADD_TODO :string= "ADD_TODO";
export const EDIT_TODO :string= "EDIT_TODO";
export const TOGGLE_TODO :string = "TOGGLE_TODO";
export const SET_FILTER :string = "SET_FILTER";

interface IAddTodoAction {
    type:typeof ADD_TODO;
    payload:{};
}
interface IToggleTodoAction {
    type:typeof TOGGLE_TODO;
    payload:{};
}
interface IEditTodoAction {
    type:typeof EDIT_TODO;
    payload:{};
}
interface ISetFilterAction {
    type:typeof SET_FILTER;
    payload:{};
}

export type TodoActionTypes = IAddTodoAction|IEditTodoAction|IToggleTodoAction|ISetFilterAction;