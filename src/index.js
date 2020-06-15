import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form/Form.js';

const wrapper = document.getElementById('container');

wrapper ? ReactDOM.render(<Form />, wrapper) : false;