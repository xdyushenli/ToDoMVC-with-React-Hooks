import React, {
    memo,
    useState,
    useContext,
} from 'react';
import TodoAppContext from '../../context';
import './index.less';

function Input(props) {
    const [value, setValue] = useState('');
    const { addTodoItem } = useContext(TodoAppContext);

    // 监听 change 事件
    const onInputChange = (e) => {
        const value = e.target.value;
        setValue(value);
    }

    // 监听 key down 事件
    const onKeyDown = (e) => {
        const keyCode = e.keyCode;

        // 按下回车键
        if (keyCode === 13) {
            addTodoItem(value);
            setValue('');
        }
    }

    return (
        <input
            className='m-input'
            value={value}
            onChange={onInputChange}
            onKeyDown={onKeyDown}
        />
    )
}

export default memo(Input);