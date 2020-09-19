import React, { Component } from "react";
import TodoItem from "./TodoItem";
import propTypes from "prop-types";

class Todo extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo._id}
        markComplete={this.props.markComplete}
        deleteTodo={this.props.deleteTodo}
        editTodo={this.props.editTodo}
        todo={todo}
      />
    ));
  }
}

//PropTypes
Todo.propTypes = {
  todos: propTypes.array.isRequired,
};

export default Todo;
