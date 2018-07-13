import React, { Component } from "react";
import { Todo } from "../Models";

class TodoInput extends Component {
    state = {
        title: "",
    };

    handleChange = event => this.setState({ title: event.target.value });

    render = () => (
        <div>
            <input
                value={this.state.title}
                onChange={this.handleChange}
                placeholder="new todo"
            />
            <button
                onClick={() => {
                    const todo = new Todo(this.state.title);
                    this.props.onAdd(todo);
                    this.setState({ title: "" });
                }}
            >
                Add
            </button>
        </div>
    );
}

export default TodoInput;
