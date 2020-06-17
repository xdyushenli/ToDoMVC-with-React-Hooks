import React, { memo } from 'react';
import TabButton from '../TabButton';
import './index.less';

const SHOW_ALL = 0;
const SHOW_COMPLETED = 1;
const SHOW_UNFINISHED = 2;

function Tab({ selectFilter }) {
    const tabList = [{
        text: 'All',
        value: SHOW_ALL,
    }, {
        text: 'Completed',
        value: SHOW_COMPLETED,
    }, {
        text: 'Unfinished',
        value: SHOW_UNFINISHED,
    }]

    return (
        <div className='m-tab'>
            {tabList.map(tabButton => <TabButton key={tabButton.value} {...tabButton} selectFilter={selectFilter} />)}
        </div>
    );
}

export default memo(Tab);