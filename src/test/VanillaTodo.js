/**
 * Created by rojo on 5/10/17.
 */

import React from 'react'

class Todo {
    constructor(todo) {
        this.item = todo;
        this.completed = false;
    }
}

export default class VanillaTodo extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: "",
            todos: []
        };
    }

    addHandler = () => {
        this.state.todos.push(new Todo(this.state.todo));

        this.setState({
            todos: this.state.todos
        });
    };

    textChangeHandler = (event) => {
        this.setState({
            todo: event.target.value
        });
    };

    render() {
        return (
            <div>
                <input type="text" onChange={this.textChangeHandler}/>
                <button onClick={this.addHandler}>Add</button>
                <ul>
                    {this.state.todos.map((todo, index) => {
                        let toggleCompletedStyle = this.state.todos[index].completed ? {
                            color: "green"
                        } : null;
                        return (
                            <li style={toggleCompletedStyle}
                                key={index}
                                onClick={() => {

                                    this.state.todos[index].completed = !this.state.todos[index].completed;

                                    this.setState({
                                        todos: this.state.todos
                                    });

                                }}>
                                {todo.item}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}