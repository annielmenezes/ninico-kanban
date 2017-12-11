import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions";

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "ACTIVE_TODO":
      return state.map(
        todo => (todo.id === action.id ? { ...todo, editing: true } : todo)
      );
    case "EDIT_TODO":
      return state.map(
        todo =>
          todo.id === action.id
            ? { ...todo, editing: false, text: action.text }
            : todo
      );
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};
