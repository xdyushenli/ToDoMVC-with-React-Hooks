import React, { memo } from 'react';
import './index.less';

function TabButton({ text, value, selectFilter }) {
    return (
        <button 
            className='u-tab-button'
            onClick={() => selectFilter(value)}
        >{text}</button>
    )
}

export default memo(TabButton);