/**
 * Created by rojo on 5/13/17.
 */

import todoAction from '../actions/todoAction';

const initialState = "";

const todoReducer = (state = initialState, action) => {

    switch (action.type) {


        case todoAction.TEXT_CHANGE :

            return action.payload;

        case todoAction.CLEAR_TODO_INPUT :

            return "";

        default :

            return state;
    }
};

export default todoReducer;