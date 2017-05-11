/**
 * Created by rojo on 5/6/17.
 */

import React from 'react';

const FlexContainer = (props) => {

    let containerStyle = {
        display: "flex",
        alignItems: "center",
        ...props.style
    };

    return (
        <div style={containerStyle}>
            {props.children}
        </div>
    );
};

export default FlexContainer;