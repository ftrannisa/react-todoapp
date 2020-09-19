import React, { Component, useState } from "react";
import propTypes from "prop-types";

class TodoItem extends Component {
  getStyle = () => {
    return {
      borderBottom: "1px #ccc dotted",
      padding: "8px ",
      marginLeft: "2px",
      background: "#f4f4f4",
      textDecoration: this.props.todo.isComplete ? "line-through" : "none",
      verticalAlign: "center",
    };
  };

  // toggleForm = () => {
  //   if (!this.state.isShowing) {
  //     this.setState({ isShowing: true });
  //   } else {
  //     this.setState({ isShowing: false });
  //   }
  // };

  // showEditTodoForm = () => {
  //   const { title } = this.props.todo;

  //   if (this.state.isShowing) {
  //     return (
  //       <div>
  //         <form ref={this.formRef} onSubmit={this.handleFormSubmit}>
  //           <input
  //             type="text"
  //             name="title"
  //             placeholder="Edit Your Todo"
  //             defaultValue={title}
  //           />
  //           <input type="submit" value="Save" />
  //         </form>
  //       </div>
  //     );
  //   }
  // };

  // handleFormSubmit = (e) => {
  //   e.preventDefault();

  //   const title = this.formRef.current["title"].value;
  //   const { id } = this.props.todo;

  //   this.props.editTodo(id, title);
  // };

  // onChange = (e) =>
  //   this.setState({
  //     [e.target.name]: e.target.value, // demo react tools to show what happens when value changes when typing
  //   });

  render() {
    const { _id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            className="checkbox"
            checked={this.props.todo.isComplete ? true : false}
            onChange={this.props.markComplete.bind(this, _id)}
          />
          {title}
          <button
            style={btnStyle}
            onClick={this.props.deleteTodo.bind(this, _id)}
          >
            <i className="fa">&#xf014;</i>
          </button>
          <button style={btnStyle}>
            <i class="fa fa-pencil"></i>
          </button>
          {/* {this.showEditTodoForm()} */}
        </p>
      </div>
    );
  }
}

//PropTypes
TodoItem.propTypes = {
  todos: propTypes.object.isRequired,
};

const btnStyle = {
  background: "grey",
  color: "white",
  border: "none",
  padding: "3px 16px",
  cursor: "pointer",
  float: "right",
  fontSize: "15px",
  borderRadius: "9%",
  marginLeft: "5px",
};

export default TodoItem;
