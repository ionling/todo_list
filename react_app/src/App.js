import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Auth from "./components/Auth";
import Todo from "./components/Todo";
import util from "./utils/util";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Simple Todo</h1>
                </header>
                <p className="App-intro">
                    A todo app wrote with React and Django.
                </p>
                <Router>
                    <div
                        style={{
                            width: "500px",
                            margin: "auto",
                            textAlign: "left",
                        }}
                    >
                        <Route
                            exact
                            path="/"
                            render={() =>
                                !util.isLogined() ? (
                                    <Redirect to="/login" />
                                ) : (
                                    <Todo />
                                )
                            }
                        />
                        <Route path="/login" component={Auth} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
