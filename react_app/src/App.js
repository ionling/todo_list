import React, { Component } from "react";
import { ListGroup } from "reactstrap";
import logo from "./logo.svg";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

class App extends Component {
    state = {
        todos: [],
    };

    render() {
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
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to
                    reload.
                </p>
                <div style={{ width: "500px", margin: "auto" }}>
                    <TodoInput
                        onAdd={todo =>
                            this.setState({
                                todos: this.state.todos.concat(todo),
                            })
                        }
                    />
                    <ListGroup style={{ marginTop: "17px" }}>{todos}</ListGroup>
                </div>
            </div>
        );
    }
}

export default App;
