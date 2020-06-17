import React, { memo, useContext } from 'react';
import TodoAppContext from '../../context';
import './index.less';

function TabButton(props) {
    const {
        text,
        value
    } = props;
    const { selectFilter } = useContext(TodoAppContext);

    return (
        <button 
            className='u-tab-button'
            onClick={() => selectFilter(value)}
        >{text}</button>
    )
}

export default memo(TabButton);