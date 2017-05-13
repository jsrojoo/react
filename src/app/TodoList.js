/**
 * Created by rojo on 5/6/17.
 */
import React from 'react'
import {Segment} from 'semantic-ui-react';
import {connect} from 'react-redux'
import todosAction from '../actions/todosAction'

class TodoList extends React.Component {

    render() {
        return (
            <Segment.Group style={{
                flex: "1 1 60vh",
                overflow: "auto",
            }}>
                {this.props.todos.map((todo, index) => {

                    let completedStyle = todo.completed ? {
                        color: "#2ECC40"
                    } : null;

                    return (
                        <Segment key={index}>
                            <h3 onClick={this.props.toggle.bind(null, index)}
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

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggle: (todoIndex) => {
            dispatch({type: todosAction.TOGGLE_TODO, payload: todoIndex});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);