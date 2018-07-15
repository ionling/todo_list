import React, { Component } from "react";
import { ListGroup } from "reactstrap";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import API from "../utils/api";

export default class Todo extends Component {
    state = {
        todos: [],
    };

    async componentDidMount() {
        const response = await API.get("/todos");
        const todos = response.data.map(x => {
            x.lastUpdate = new Date();
            x.lastUpload = new Date();
            return x;
        });
        this.setState({ todos });
    }

    componentDidUpdate() {
        const updatedTodos = this.state.todos.filter(
            x => +x.lastUpdate > +x.lastUpload,
        );
        updatedTodos.forEach(async x => {
            try {
                await API.put(`/todos/${x.id}`, x);
            } catch (error) {
                console.warn(error);
                console.warn(error.response);
            }
            x.lastUpload = new Date();
        });
    }

    render() {
        const todos = this.state.todos.map(todo => (
            <TodoItem
                value={todo}
                key={todo.id}
                onDoneChange={done => {
                    todo.done = done;
                    todo.lastUpdate = new Date();
                    const todos = this.state.todos.filter(
                        x => x.id !== todo.id,
                    );
                    todos.push(todo);
                    this.setState({ todos });
                }}
                onDelete={async () => {
                    const todos = this.state.todos.filter(x => x !== todo);
                    await API.delete(`/todos/${todo.id}`);
                    this.setState({ todos });
                }}
            />
        ));
        return (
            <div>
                <TodoInput
                    onAdd={async todo => {
                        const response = await API.post("/todos", todo);
                        const syncedTodo = response.data;
                        syncedTodo.lastUpdate = new Date();
                        syncedTodo.lastUpload = new Date();
                        this.setState({
                            todos: this.state.todos.concat(response.data),
                        });
                    }}
                />
                <ListGroup style={{ marginTop: "17px" }}>{todos}</ListGroup>
            </div>
        );
    }
}
