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
            todo: {
                what: "",
                when: new Date(),
                completed: false
            },
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
            todo: {
                what: "",
                when: new Date(),
                completed: false
            }
        });
        return this;
    }


    addTodoHandler = () => {
        if (this.state.todo !== "")
            this.addNewTodo()
                .updateTodos()
                .resetTodo();
    };

    textChangeHandler = (event) => {
        this.setState({
            todo: {
                what: event.target.value,
                when: new Date(),
                completed: false
            }
        });
    };

    render() {
        return (
            <FlexContainer>
                <Header/>
                <Input
                    todo={this.state.todo.what}
                    addHandler={this.addTodoHandler}
                    textChangeHandler={this.textChangeHandler}
                />
                <TodoList
                    todos={this.state.todos}/>
            </FlexContainer>
        );
    }
}

export default App;

