/**
 * Created by rojo on 5/6/17.
 */
import React from 'react'

const TodoList = (props) => {
    return (
        <ul>
            {props.todos.map((todo, index) => {
                return (
                    <li key={index}>{todo}</li>
                );
            })}
        </ul>
    );
};

export default TodoList;