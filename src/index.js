import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import {createStore} from 'redux'
import reducer from './reducers/reducer'
import {Provider} from 'react-redux'

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
