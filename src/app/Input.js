/**
 * Created by rojo on 5/6/17.
 */

import React from 'react'
import {Icon, Input} from 'semantic-ui-react'

const TodoInput = (props) => {
    return (
        <div>
            <Input
                type="text"
                placeholder="Add Task.."
                icon={
                    <Icon
                        name="plus"
                        inverted circular link
                        onClick={props.addHandler}
                    />
                }
                onChange={props.textChangeHandler}
                value={props.todo}
                onKeyPress={(event) => {
                    if (event.key === 'Enter')
                        props.addHandler();

                }}
            />
        </div>
    );
};

export default TodoInput;