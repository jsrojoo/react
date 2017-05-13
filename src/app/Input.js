/**
 * Created by rojo on 5/6/17.
 */

import React from 'react'
import {Icon, Input} from 'semantic-ui-react'
import {connect} from 'react-redux'
import todoAction from '../actions/todoAction'
import todosAction from '../actions/todosAction'
import Todo from "../model/Todo";

class TodoInput extends React.Component {

    componentWillMount() {
        var findIP = new Promise(r => {
            var w = window,
                a = new (w.RTCPeerConnection || w.mozRTCPeerConnection || w.webkitRTCPeerConnection)({iceServers: []}),
                b = () => {
                };
            a.createDataChannel("");
            a.createOffer(c => a.setLocalDescription(c, b, b), b);
            a.onicecandidate = c => {
                try {
                    c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r)
                } catch (e) {
                }
            }
        })

        /*Usage example*/
        findIP.then(ip => console.log(ip)).catch(e => console.error(e))
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