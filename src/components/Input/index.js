import React, {
    memo,
} from 'react';
import './index.less';

function Input({ value, addTodoItem, setInputValue }) {
    // 监听 key down 事件
    const onKeyDown = (e) => {
        const keyCode = e.keyCode;

        // 按下回车键
        if (keyCode === 13) {
            addTodoItem(value);
            setInputValue('');
        }
    }

    return (
        <input
            className='m-input'
            value={value}
            onKeyDown={onKeyDown}
            onChange={(e) => setInputValue(e.target.value)}
        />
    )
}

export default memo(Input);