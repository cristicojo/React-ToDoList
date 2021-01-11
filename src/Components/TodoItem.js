import React, {Component} from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {

    getItemStyle() {

        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todoItemProps.completed ?
                'line-through' : 'none'
        }
    }



    render() {
        const {id, title}=this.props.todoItemProps;

        return (
            <div style={ this.getItemStyle() }>
                <p>
                    <input type="checkbox" onChange={this.props.markCompleteTodoItemProps.bind(this, id)}/>
                    {title}
                    <button className="button" onClick={this.props.deleteBtnTodoItemProps.bind(this, id)}>delete</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todoItemProps: PropTypes.object.isRequired
}


export default TodoItem;

