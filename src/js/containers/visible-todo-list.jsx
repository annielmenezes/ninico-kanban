import { connect } from "react-redux";
import Notes from "../components/notes";
import {
  VisibilityFilters,
  toggleTodo,
  activeTodo,
  deleteTodo,
  editTodo,
  removeTodo
} from "../actions";
const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilters;

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    case SHOW_ALL:
    default:
      return todos;
  }
};

const mapStateToProps = state => {
  return {
    notes: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTodoClick: id => dispatch(toggleTodo(id)),
    onActiveTodo: id => dispatch(activeTodo(id)),
    onDeleteTodo: id => dispatch(removeTodo(id)),
    onEditTodo: (id, text) => dispatch(editTodo(id, text)),
    onToggleTodo: id => dispatch(toggleTodo(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notes);
