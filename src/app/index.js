import React, { useReducer, useState } from 'react';
import {
    append,
    findIndex,
    propEq,
    update,
    remove,
    assoc,
    pipe,
    prop,
    __,
} from 'ramda';
import Input from '../components/Input';
import TodoList from '../components/TodoList';
import './index.less';

let itemId = 1;

const TodoAppReducer = (todoList, action) => {
    switch(action.type) {
        case 'ADD_TODO': {
            const { text } = action;

            return append({
                id: itemId++,
                text,
                completed: false,
            }, todoList);
        }
        case 'DELETE_TODO': {
            const { id } = action;

            return pipe(
                findIndex(propEq('id', id)),
                remove(__, 1, todoList)
            )(todoList);
        }
        case 'TOGGLE_TODO': {
            const { id } = action;
            const index = findIndex(propEq('id', id), todoList);
            const currentState = prop('completed', todoList[index]);
            
            return pipe(
                assoc('completed', !currentState),
                update(index, __, todoList),
            )(todoList[index]);
        }
        default: 
            return todoList;
    }
}

function TodoApp() {
    const [todoList, dispatch] = useReducer(TodoAppReducer, []);
    const [value, setInputValue] = useState('');

    // 添加待办
    const addTodoItem = (text) => {
        dispatch({ type: 'ADD_TODO', text });
    }

    // 删除待办
    const deleteTodoItem = (id) => {
        dispatch({ type: 'DELETE_TODO', id });
    }

    // 切换待办状态
    const toggleTodoItem = (id) => {
        dispatch({ type: 'TOGGLE_TODO', id });
    }

    return (
        <div className='container g-both-center g-cloumn'>
            <Input 
                value={value}
                addTodoItem={addTodoItem}
                setInputValue={setInputValue}
            />
            <TodoList 
                todoList={todoList}
                deleteTodoItem={deleteTodoItem}
                toggleTodoItem={toggleTodoItem}
            />
        </div>
    )
}

export default TodoApp;