/**
 * Created by rojo on 5/2/17.
 */
import React, {Component} from 'react';


const MainContainer = (props) => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column"
        }}>
            {props.children}
        </div>
    );
};

const InputContainer = (props) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            {props.children}
        </div>
    );
};

const TodoList = (props) => {
    return (
        <div>
            {props.todos.map((todo, index) => {
                return (
                    <li key={index}
                        onClick={() => {
                            console.log("I Was Clicked")
                        }}>{todo}</li>
                );
            })}
        </div>
    );
};


const TextField = (props) => {
    return (
        <input
            type="text"
            value={props.value}
            onChange={props.changeHandler}
        />
    );
};

const AddTodo = (props) => {
    return (
        <button onClick={props.addTodo}>
            Add todo
        </button>
    );
};


export default class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            todo: "",
            todos: [],
        };
    }

    setTodo = (event) => {
        this.setState({
            todo: event.target.value
        });
    };

    addTodo = () => {

        let todos = this.state.todos;
        todos.push(this.state.todo);

        this.setState({
            todo: ""
        });

    };

    render() {
        return (
            <MainContainer>
                <h1> Todo App </h1>
                <InputContainer >
                    <TextField
                        value={this.state.todo}
                        changeHandler={this.setTodo}
                    />
                    <AddTodo addTodo=       {this.addTodo}/>
                </InputContainer>
                <TodoList todos={this.state.todos}/>
            </MainContainer>
        );
    }
}
