import React from "react";
import PropTypes from "prop-types";
import { ListGroupItem, Container, Row, Col } from "reactstrap";
import { Todo } from "../Models";

function TodoItem(props) {
    return (
        <ListGroupItem>
            <Container>
                <Row>
                    <Col xs="1">
                        <input
                            type="checkbox"
                            checked={props.value.done}
                            onChange={event => {
                                console.log(event.target);
                                props.onDoneChange(event.target.value === "on");
                            }}
                        />
                    </Col>
                    <Col xs="10">
                        <div className="text-left" style={{ fontSize: "17px" }}>
                            {props.value.title}
                        </div>
                    </Col>
                    <Col xs="1">
                        <button
                            onClick={props.onDelete}
                            style={{ border: "0", backgroundColor: "#fff" }}
                        >
                            x
                        </button>
                    </Col>
                </Row>
            </Container>
        </ListGroupItem>
    );
}

TodoItem.propTypes = {
    value: PropTypes.instanceOf(Todo).isRequired,
    onDoneChange: PropTypes.func,
    onDelete: PropTypes.func,
};

export default TodoItem;
