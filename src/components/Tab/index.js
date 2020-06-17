import React, { memo } from 'react';
import TabButton from '../TabButton';
import './index.less';

function Tab() {
    const tabList = [{
        text: 'All',
        value: 0,
    }, {
        text: 'Completed',
        value: 1,
    }, {
        text: 'Unfinished',
        value: 2,
    }]

    return (
        <div className='m-tab'>
            {tabList.map(tabButton => <TabButton key={tabButton.value} {...tabButton} />)}
        </div>
    );
}

export default memo(Tab);