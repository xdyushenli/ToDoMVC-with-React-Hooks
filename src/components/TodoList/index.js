import React, {
    memo,
    useReducer,
    useCallback,
} from 'react';
import TodoItem from '../TodoItem';
import Tab from '../Tab';
import './index.less';

const SHOW_ALL = 0;

const toggleTabReducer = (filter, action) => {
    switch(action.type) {
        case 'SELECT_FILTER': {
            return action.filter;
        }
        default:
            return filter;
    }
};

function TodoList({ todoList, deleteTodoItem, toggleTodoItem }) {
    const [filter, dispatch] = useReducer(toggleTabReducer, SHOW_ALL);

    const selectFilter = useCallback((filter) => {
        dispatch({ type: 'SELECT_FILTER', filter })
    }, []);

    return (
        <ul className='m-todo-list'>
            {todoList.map(item => (
                <TodoItem 
                    key={item.id} 
                    filter={filter}
                    deleteTodoItem={deleteTodoItem}
                    toggleTodoItem={toggleTodoItem}
                    {...item}
                />
            ))}
            <Tab selectFilter={selectFilter} />
        </ul>
    )
}

export default memo(TodoList);