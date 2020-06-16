import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/Input/Input.js';
import './common/common.less';
import './index.less';

const wrapper = document.getElementById('container');

wrapper ? ReactDOM.render(
    <div className='container g-both-center'>
        <Input />
    </div>,
wrapper) : false;