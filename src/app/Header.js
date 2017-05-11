/**
 * Created by rojo on 5/6/17.
 */

import React from 'react';
import {Header, Icon} from 'semantic-ui-react'

const TodoHeader = () => {

    return (
        <Header
            as='h2'
            color='red'
            icon
        >
            <Icon color="black" name="write"/>
            Stuff to do

        </Header>
    );
};

export default TodoHeader;
