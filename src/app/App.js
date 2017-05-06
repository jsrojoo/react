import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Input from './Input'
import FlexContainer from './FlexContainer'
import TodoList from './TodoList'

class App extends Component {

    constructor() {
        super();
        this.state = {
            todo: "",
            todos: []
        };
    }

    addNewTodo() {
        this.state.todos.push(this.state.todo);
        return this;
    }

    updateTodos() {
        this.setState({
            todos: this.state.todos,
        });
        return this;
    }

    resetTodo() {
        this.setState({
            todo: ""
        });
        return this;
    }


    addTodoHandler = () => {
        this.addNewTodo()
            .updateTodos()
            .resetTodo();
    };

    textChangeHandler = (event) => {
        this.setState({
            todo: event.target.value
        });
    };


    render() {
        return (
            <FlexContainer>
                <Header/>
                <Input
                    todo={this.state.todo}
                    addHandler={this.addTodoHandler}
                    textChangeHandler={this.textChangeHandler}
                />
                <TodoList todos={this.state.todos}/>
            </FlexContainer>
        );
    }
}

export
default
App;

