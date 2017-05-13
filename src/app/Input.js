/**
 * Created by rojo on 5/6/17.
 */

import React from 'react'
import {Icon, Input} from 'semantic-ui-react'
import {connect} from 'react-redux'
import todoAction from '../actions/todoAction'
import todosAction from '../actions/todosAction'
import Todo from "../model/Todo";
import axios from 'axios';

class TodoInput extends React.Component {

    componentWillMount() {
        axios.get("https://crossorigin.me/https://l2.io/ip.js?var=x")
            .then((response) => {
                this.props.addTodo("Hello " + response.data.substr(3).split(",")[0] + "\"");
            });
    }

    textChange = (event) => {
        this.props.textChange(event.target.value);
    };

    addTodo = () => {
        this.props.addTodo(this.props.todo);
        this.props.clearTodoInput();
    };

    onEnterKeyPress = (event) => {
        if (event.key === 'Enter')
            this.addTodo();
    };

    render() {
        return (
            <div>
                <Input
                    type="text" placeholder="Add Task.."
                    value={this.props.todo}
                    icon={<Icon name="plus" inverted circular link onClick={this.addTodo}/>}
                    onChange={this.textChange} onKeyPress={this.onEnterKeyPress}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state.todo,
        todos: state.todos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearTodoInput: () => {
            dispatch({type: todoAction.CLEAR_TODO_INPUT});
        },
        textChange: (value) => {
            dispatch({type: todoAction.TEXT_CHANGE, payload: value})
        },
        addTodo: (todo) => {
            dispatch({type: todosAction.ADD_TODO, payload: new Todo(todo)});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);