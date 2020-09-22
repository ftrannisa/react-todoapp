import React, { Component } from "react";
import Todo from "./components/Todo";
import Addtodo from "./components/Addtodo";
import Header from "./components/Header";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    axios.get("https://btm-rn.herokuapp.com/api/v1/todo/").then((res) =>
      this.setState({
        todos: res.data.results,
      })
    );
  }

  getTodo = () => {
    axios.get("https://btm-rn.herokuapp.com/api/v1/todo/").then((res) => {
      this.setState({
        todos: res.data.results,
      });
    });
  };

  markComplete = (_id) => {
    axios
      .put(`https://btm-rn.herokuapp.com/api/v1/todo/${_id}`, {
        _id,
        isComplete: true,
      })
      .then((res) => {
        //ini
        this.setState({
          todos: this.state.todos.map((todo) => {
            if (todo._id === _id) {
              todo.isComplete = !todo.isComplete;
            }
            return todo;
          }),
        });
      }); //ini
  };

  editTodo = (_id, title) => {
    axios
      .put(`https://btm-rn.herokuapp.com/api/v1/todo/${_id}`, {
        title,
      })
      .then(({ data }) => {
        this.getTodo();
      })
      .catch((error) => console.log(error));
  };

  deleteTodo = (_id) => {
    axios
      .delete(`https://btm-rn.herokuapp.com/api/v1/todo/${_id}`)
      .then((res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo._id !== _id)],
        })
      );
  };

  Addtodo = (title) => {
    axios
      .post("https://btm-rn.herokuapp.com/api/v1/todo/", {
        title,
        isComplete: false,
      })
      .then((res) =>
        this.setState({
          todos: [...this.state.todos, res.data.results],
        })
      );
  };

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Addtodo Addtodo={this.Addtodo} />
          <Todo
            todos={this.state.todos}
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo}
            editTodo={this.editTodo}
            getTodo={this.getTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
