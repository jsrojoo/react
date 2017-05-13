/**
 * Created by rojo on 5/13/17.
 */

import Todo from '../model/Todo';

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
        // case "ADD_TODO" :
        //
        //     let newState = [...state];
        //     newState.push(action.todo);
        //     return newState;
        //
        default:
            return state;
    }
};

export default todosReducer;