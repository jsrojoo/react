/**
 * Created by rojo on 5/6/17.
 */

import React from 'react';
import {Header} from 'semantic-ui-react'

const TodoHeader = () => {

    let wrapperStyle = {
        width: "100%",
        textAlign: "center",
        marginBottom: "20px"
    };

    return (
        <div style={wrapperStyle}>
            <Header
                as='h1'
                block
                inverted
                color='red'
            >
                Todo App
            </Header>
        </div>
    );
};

export default TodoHeader;
