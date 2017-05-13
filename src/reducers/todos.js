/**
 * Created by rojo on 5/13/17.
 */

import Todo from '../model/Todo';
import todosAction from '../actions/todosAction'

const initialState = [
    new Todo("Improved Todo App UI", true),
    new Todo("Add feature to mark todo items as done", true),
    new Todo("Add additional info when adding a Task such as date, location, etc. - (partially)"),
    new Todo("Deploy to Heroku", true),
    new Todo("Save data somewhere using new tech"),
    new Todo("Sort todo based on latest entry", true),
];

const todosReducer = (state = initialState, action) => {
    switch (action.type) {

        case todosAction.ADD_TODO :

            let newState = [...state];
            newState.push(action.payload);

            return newState;

        case todosAction.TOGGLE_TODO:

            let todos = Object.assign([], state);
            let todo = todos[action.payload];
            todo.completed = !todo.completed;

            return todos;

        default:
            return state;
    }
};

export default todosReducer;