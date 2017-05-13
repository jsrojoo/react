/**
 * Created by rojo on 5/13/17.
 */

import Todo from '../model/Todo'

const initialState = new Todo("");

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        default :
            return state;
    }
};

export default todoReducer;