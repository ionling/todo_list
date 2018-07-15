import React, { Component } from "react";
import { ListGroup } from "reactstrap";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

export default class Todo extends Component {
    state = {
        todos: [],
    };

    render = () => {
        const todos = this.state.todos.map(todo => (
            <TodoItem
                value={todo}
                key={todo.id}
                onDoneChange={done => {
                    todo.done = done;
                    const todos = this.state.todos.filter(
                        x => x.id !== todo.id,
                    );
                    todos.push(todo);
                    this.setState({ todos });
                }}
                onDelete={() => {
                    const todos = this.state.todos.filter(x => x !== todo);
                    this.setState({ todos });
                }}
            />
        ));
        return (
            <div>
                <TodoInput
                    onAdd={todo =>
                        this.setState({
                            todos: this.state.todos.concat(todo),
                        })
                    }
                />
                <ListGroup style={{ marginTop: "17px" }}>{todos}</ListGroup>
            </div>
        );
    };
}
