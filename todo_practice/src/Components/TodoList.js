import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        return (
                <li>
                    {this.props.todo.content}
                    <button onClick={this.props.onRemove}>X</button>
                </li>
        );
    }
}

export default TodoList;