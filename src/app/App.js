import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Input from './Input'
import FlexContainer from './FlexContainer'
import TodoList from './TodoList'
import Todo from '../model/Todo'

class App extends Component {

    constructor() {
        super();
        this.state = {
            todo: new Todo(""),
            todos: [
                new Todo("Improved Todo App UI", true),
                new Todo("Add feature to mark todo items as done", true),
                new Todo("Add additional info when adding a Task such as date, location, etc. - (partially)"),
                new Todo("Deploy to Heroku", true),
                new Todo("Save data somewhere using new tech"),
            ]
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
            todo: new Todo("")
        });
        return this;
    }


    addTodoHandler = () => {

        let todoEntryIsNotEmpty = this.state.todo !== "";

        if (todoEntryIsNotEmpty)
            this.addNewTodo()
                .updateTodos()
                .resetTodo();

    };

    textChangeHandler = (event) => {
        this.setState({
            todo: new Todo(event.target.value)
        });
    };

    render() {
        return (
            <FlexContainer style={{
                flexDirection: "column",
            }}>
                <FlexContainer style={{
                    flexDirection: "column"
                }}>
                    <Header/>
                    <Input
                        todo={this.state.todo.what}
                        addHandler={this.addTodoHandler}
                        textChangeHandler={this.textChangeHandler}
                    />
                </FlexContainer>
                <TodoList
                    todos={this.state.todos}/>
            </FlexContainer>
        );
    }
}

export default App;

