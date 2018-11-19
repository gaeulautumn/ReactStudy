import React, { Component } from 'react';
import update from 'react-addons-update';
import TodoCreate from './TodoCreate';
import TodoList from './TodoList';

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos : [
                {
                    content: '오늘의할일1'
                }, {
                    content: '오늘의할일2'
                }, {
                    content: '오늘의할일3'
                }
            ]
        }
    }

    handleCreate = (data) => {
        this.setState({
            todos: update(this.state.todos,
                    { $push: [data] })
        });
    }
    handleRemove = (i) => {
        this.setState({
            todos: update(this.state.todos,
                { $splice: [[i, 1]]})
        });
      
    }

    render() {
        const mapToComponents = (data) => {
            return data.map((todo, i) => {
                return (
                    <TodoList key={i}
                              todo={todo}
                              onRemove={
                                  () => this.handleRemove(i)
                              } />
                );
            });
        }
        return (
            <div>
                <TodoCreate onCreate={this.handleCreate}/>
                <div>
                    <ul>
                        {mapToComponents(this.state.todos)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Todo;