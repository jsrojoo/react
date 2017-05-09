/**
 * Created by rojo on 5/6/17.
 */
import React from 'react'
import {Segment} from 'semantic-ui-react';

class TodoList extends React.Component {

    render() {
        return (
            <Segment.Group>
                {this.props.todos.map((todo, index) => {
                    return (
                        <Segment key={index}>
                            <h3>{todo.what}</h3>
                            <span>{todo.when.toLocaleString()}</span>
                        </Segment>
                    );
                })}
            </Segment.Group>
        );
    }
}

export default TodoList;