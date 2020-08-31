import { ADD_TODO, EDIT_TODO, TOGGLE_TODO} from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false,
          },
        },
      };
    }

    case EDIT_TODO: {
      const { id, content } = action.payload;
      const currentTodoUpdate = [ ...state.allIds] ;
      const indexToUpdate = currentTodoUpdate.find(item=>
        item===action.payload.id
      );

      const newTodoUpdate = {
        ...currentTodoUpdate[indexToUpdate],
        content:action.payload.content
      }

      // console.log('This is the new to update', newTodoUpdate)
      return {
        ...state,
        newTodoUpdate
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      };
    }
    default:
      return state;
  }
}

/*  ...state.allIds.map(s =>
          (s.id === action.payload.id)
         ?
          Object.assign({}, s, action.payload) : s )*/
