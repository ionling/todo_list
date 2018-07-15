import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import API from "../utils/api";
import util from "../utils/util";

class Auth extends Component {
    state = {
        username: "",
        password: "",
    };

    handleSubmit = async event => {
        event.preventDefault();
        const response = await API.post("/users/login", this.state);
        const token = response.data.token;
        util.storeToken(token);
        // Redirect to home page.
        // Refer: https://serverless-stack.com/chapters/redirect-on-login-and-logout.html
        this.props.history.push("/");
    };

    handleSecondaryClick = async () => {
        const response = await API.get("/users/casual");
        this.setState(response.data);
    };

    // Use arrow function to avoid `this` problem.
    handleInputChange = event => {
        console.log(this.state);
        console.log(this.setState);
        const target = event.target;
        this.setState({
            [target.name]: target.value,
        });
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                        type="text"
                        name="username"
                        id="username"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                </FormGroup>
                <Button type="submit" color="primary">
                    Login
                </Button>{" "}
                <Button color="secondary" onClick={this.handleSecondaryClick}>
                    Get a casual user
                </Button>
            </Form>
        );
    }
}

export default Auth;
