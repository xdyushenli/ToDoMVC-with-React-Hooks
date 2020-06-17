import React, {
    memo,
    useContext,
} from 'react';
import TodoItem from '../TodoItem';
import Tab from '../Tab';
import './index.less';

function TodoList(props) {
    const {
        todoList,
    } = props;

    return (
        <ul className='m-todo-list'>
            {todoList.map(item => <TodoItem key={item.id} {...item} />)}
            <Tab />
        </ul>
    )
}

export default memo(TodoList);