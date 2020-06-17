import React, {
    useReducer,
} from 'react';
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
import {
    Input,
    TodoList,
} from '../components';
import TodoAppContext from '../context';
import './index.less';

let itemId = 1;
const SHOW_ALL = 0;

const TodoAppReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO': {
            const { text } = action;

            return pipe(
                prop('todoList'),
                append({
                    id: itemId++,
                    text,
                    completed: false,
                }),
                assoc('todoList', __, state),
            )(state);
        }
        case 'DELETE_TODO': {
            const { id } = action;
            const todoList = prop('todoList', state);

            return pipe(
                findIndex(propEq('id', id)),
                remove(__, 1, todoList),
                assoc('todoList', __, state)
            )(todoList);
        }
        case 'TOGGLE_TODO': {
            const { id } = action;
            const todoList = prop('todoList', state);
            const index = findIndex(propEq('id', id), todoList);
            const currentState = prop('completed', todoList[index]);
            
            return pipe(
                assoc('completed', !currentState),
                update(index, __, todoList),
                assoc('todoList', __, state),
            )(todoList[index]);
        }
        case 'SELECT_FILTER': {
            const { filter } = action;
            return assoc('filter', filter, state);
        }
        default: 
            return state;
    }
}

function TodoApp() {
    const [state, dispatch] = useReducer(TodoAppReducer, {
        todoList: [],
        filter: SHOW_ALL,
    });

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

    // 切换显示状态
    const selectFilter = (filter) => {
        dispatch({ type: 'SELECT_FILTER', filter })
    }

    return (
        <div className='container g-both-center g-cloumn'>
            <TodoAppContext.Provider
                value={{
                    addTodoItem,
                    deleteTodoItem,
                    toggleTodoItem,
                    selectFilter,
                    filter: state.filter,
                }}
            >
                <Input />
                <TodoList todoList={state.todoList} />
            </TodoAppContext.Provider>
        </div>
    )
}

export default TodoApp;

// 星海路上走走停停
// 翻开年少漂泊的回忆
// 开始想你的前一刻
// 轻泛起笑意
// 不禁笑这有些滑稽
// 曾经赢过你
// 想回到那天
// 再续次前缘
// 峰吹起了从前
// 从前初见你眉眼
// 万般流连
// 美人尖尖英俊侧脸
// 也甘愿含情脉脉去见你一面
// 如今走过这些年
// 万般留恋
// 我为D.Va 你作岱玹
// 跨越时间 闯入同一次元
// 我曾难自拔于星海之大
// 也想成全这段童话
// 不得真假 不做挣扎 不惧笑话
// 我曾将星空描绘成画
// 也想重回那个盛夏
// 心之所动 且就随峰去吧
// 想跟着你走 可已有牵挂

// 人生的路走走停停
// 可是浙江远隔万里
// 可惜抚摸的是故事那不是爱情
// 苦苦期待终没结果披上了嫁衣
// 再次看到你
// 洁白西装里
// 笑的好甜蜜
// 你爱的人在身边
// 薇薇笑颜
// 焕佳孙宁绕在膝前
// 也只能转眼成空不再去留恋
// 陪你走过这些年
// 薇薇笑颜
// 翻过岁月走到今天
// 万分不舍忘却你的眉眼
// 我曾难自拔于星海之大
// 也已成全这段佳话
// 不求真假 弹着吉他 深爱着她
// 你已将半生托付给她
// 为她献上一匹白马
// 心之所动 且就随峰去吧

// 晚风吹起我鬓间的秀发
// 抚平回忆留下的疤
// 你的眼中 明暗交杂 一笑生花
// 你终将青春献给了她
// 连同指尖弹出的盛夏
// 梦中的你向我告别啦

// 我曾难自拔于星海之大
// 也已成全这段佳话
// 不求真假 弹着吉他 深爱着她
// 你已将半生托付给她
// 为她献上一匹白马
// 心之所动 且就随峰去吧
// 以爱之名 再见宋哈娜