/**
 * Created by rojo on 5/6/17.
 */
import React from 'react'
import {Segment} from 'semantic-ui-react';

class TodoList extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: []
        };
    }

    componentWillMount() {
        this.setState({
            todos: this.props.todos
        })
    }

    render() {
        return (
            <Segment.Group style={{
                flex : "1 1 60vh",
                overflow:"auto",
            }}>
                {this.state.todos.map((todo, index) => {

                    let completedStyle = todo.completed ? {
                        color: "#2ECC40"
                    } : null;

                    return (
                        <Segment key={index}>
                            <h3 onClick={() => {
                                this.state.todos[index].completed = !this.state.todos[index].completed;

                                this.setState({
                                    todos: this.state.todos
                                });
                            }}
                                style={completedStyle}>
                                {todo.what}
                            </h3>
                            <span>
                                {todo.when.toLocaleString()}
                            </span>
                        </Segment>
                    );
                }).reverse()}
            </Segment.Group>
        );
    }
}

export default TodoList;