import React, { Component } from "react";
import AddTodo from "../containers/add-todo";
import Notes from "./notes";
import VisibleTodoList from "../containers/visible-todo-list";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
      </div>
    );
  }
}
