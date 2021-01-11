import React, {Component} from 'react';
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

class Todos extends Component {

    render() {

        return this.props.todosProps.map( (todo) => (
            < TodoItem key={todo.id} todoItemProps={todo} markCompleteTodoItemProps={this.props.markCompleteTodosProps}
                       deleteBtnTodoItemProps={this.props.deleteBtnTodosProps} />
            ))
    }
}

Todos.propTypes = {
    todosProps: PropTypes.array.isRequired

}

export default Todos;

