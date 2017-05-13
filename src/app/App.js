import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Input from './Input'
import FlexContainer from './FlexContainer'
import TodoList from './TodoList'
import {connect} from 'react-redux'

class App extends Component {
    render() {
        return (
            <FlexContainer style={{
                flexDirection: "column",
            }}>
                <Header/>
                <Input
                    todo={this.props.todo.what}
                />
                <TodoList
                    todos={this.props.todos}
                />
            </FlexContainer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        todo: state.todo
    }
};

export default connect(mapStateToProps)(App);

