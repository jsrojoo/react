/**
 * Created by rojo on 5/13/17.
 */

import todos from './todos'
import todo from './todo'

import {combineReducers} from 'redux';

const reducer = combineReducers({
    todos,
    todo
});

export default reducer;