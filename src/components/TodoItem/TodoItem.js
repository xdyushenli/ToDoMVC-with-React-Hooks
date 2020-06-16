import React from 'react';
import '../../common/common.less';
import './TodoItem.less';

function TodoItem(props) {
    const {
        text,
        state,
    } = props;

    return (
        <div className='u-todo-item'>
            <div className=''></div>
        </div>
    )
}

export default TodoItem;