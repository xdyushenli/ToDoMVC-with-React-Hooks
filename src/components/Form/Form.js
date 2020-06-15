import React, { Component } from 'react';
import './Form.less';

class Form extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { value } = e.target;

        this.setState(() => {
            return {
                value,
            }
        });
    }

    render() {
        return (
            <>
                <form className="form">
                    <input 
                        type='text'
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </form>
                <p>{this.state.value}</p>
            </>
        );
    }
}

export default Form;