import React from "react";
import PropTypes from "prop-types";
import { Todo } from "../Models";

function TodoItem(props) {
    return (
        <li>
            <input type="checkbox" />
            <span>{props.value.title}</span>
            <button onClick={props.onDelete}>x</button>
        </li>
    );
}

TodoItem.propTypes = {
    value: PropTypes.instanceOf(Todo).isRequired,
    onDelete: PropTypes.func,
};

export default TodoItem;
