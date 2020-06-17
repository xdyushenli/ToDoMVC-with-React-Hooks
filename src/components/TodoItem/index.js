import React, {
    memo,
    useContext,
} from 'react';
import TodoAppContext from '../../context';
import './index.less';

const SHOW_ALL = 0;
const SHOW_COMPLETED = 1;
const SHOW_UNFINISHED = 2;

function TodoItem(props) {
    const {
        id,
        text,
        completed,
    } = props;

    const { toggleTodoItem, deleteTodoItem, filter } = useContext(TodoAppContext);
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