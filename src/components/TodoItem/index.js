import React, {
    memo,
} from 'react';
import './index.less';

const SHOW_ALL = 0;
const SHOW_COMPLETED = 1;
const SHOW_UNFINISHED = 2;

function TodoItem({ id, text, completed, filter, toggleTodoItem, deleteTodoItem }) {
    const isItemHide = filter !== SHOW_ALL && ((filter === SHOW_COMPLETED && !completed) || (filter === SHOW_UNFINISHED && completed)); 

    return (
        <li className={isItemHide ? 'z-hide' : 'u-todo-item g-vertical-center'}>
            <div className='toggle-btn' onClick={() => toggleTodoItem(id)}></div>
            <span className={completed ? 'z-completed' : ''}>{text}</span>
            <div className='delete-btn' onClick={() => deleteTodoItem(id)}></div>
        </li>
    )
}

export default memo(TodoItem);