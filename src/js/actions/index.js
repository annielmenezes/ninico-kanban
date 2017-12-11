import { v4 } from "uuid";

export const ACTIVE_TODO = "ACTIVE_TODO";
export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const VisibilityFilters = {
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED"
};

export const activeTodo = id => {
  return {
    type: ACTIVE_TODO,
    id
  };
};

export const addTodo = text => {
  return {
    type: ADD_TODO,
    id: v4(),
    text
  };
};

export const editTodo = (id, text) => {
  return {
    type: EDIT_TODO,
    id,
    text
  };
};

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    id
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};
