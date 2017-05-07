/**
 * Created by rojo on 5/6/17.
 */
import React from 'react'
import {Segment} from 'semantic-ui-react';

const TodoList = (props) => {
    return (
        <Segment.Group>
            {props.todos.map((todo, index) => {
                return (
                    <Segment key={index}>
                        {todo}
                    </Segment>
                );
            })}
        </Segment.Group>

    );
};

export default TodoList;