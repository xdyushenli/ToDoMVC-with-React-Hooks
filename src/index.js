import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './view';

const wrapper = document.getElementById('container');

wrapper ? ReactDOM.render(
    <TodoApp />, 
    wrapper
) : false;