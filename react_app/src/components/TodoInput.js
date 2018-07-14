import React, { Component } from "react";
import { Button, Input, InputGroup, InputGroupAddon } from "reactstrap";
import { Todo } from "../Models";

class TodoInput extends Component {
    state = {
        title: "",
    };

    handleChange = event => this.setState({ title: event.target.value });

    render = () => (
        <InputGroup>
            <Input
                value={this.state.title}
                onChange={this.handleChange}
                placeholder="new todo"
            />
            <InputGroupAddon addonType="append">
                <Button
                    onClick={() => {
                        if (this.state.title === "") return;
                        const todo = new Todo(this.state.title);
                        this.props.onAdd(todo);
                        this.setState({ title: "" });
                    }}
                    color="primary"
                >
                    Add
                </Button>
            </InputGroupAddon>
        </InputGroup>
    );
}

export default TodoInput;
