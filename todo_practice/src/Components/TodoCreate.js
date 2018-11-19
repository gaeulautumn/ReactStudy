import React, { Component } from 'react';

class TodoCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        };
    }

    handleClick = () => {
        const todo = {
            content: this.state.content
        };

        this.props.onCreate(todo);
        this.setState({
            content: ''
        });
    }

    handleChange = (e) => {
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }
    
    render() {
        return (
            <div>
                <input type="text"
                       name="content"
                       placeholder="할일을 입력해주세요"
                       value={this.state.content}
                       onChange={this.handleChange}
                       />
                <button onClick={this.handleClick}>+</button>
            </div>
        );
    }
}

export default TodoCreate;