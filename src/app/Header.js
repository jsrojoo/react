/**
 * Created by rojo on 5/6/17.
 */

import React from 'react';
import {Header, Icon} from 'semantic-ui-react'

const TodoHeader = () => {

    let wrapperStyle = {
        width: "100%",
        textAlign: "center",
    };

    return (
        <div style={wrapperStyle}>
            <Header
                as='h2'
                color='red'
                icon
            >
                <Icon color="black" name="write"/>
                Stuff to do

            </Header>
        </div>
    );
};

export default TodoHeader;
