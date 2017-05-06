/**
 * Created by rojo on 5/6/17.
 */

import React from 'react'


const Input = (props) => {
    return (
        <div>
            <input
                type="text"
                onChange={props.textChangeHandler}
                value={props.todo}
            />
            <button onClick={props.addHandler}>Add</button>
        </div>
    );
};


export default Input;