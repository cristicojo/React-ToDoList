import React, {Component} from 'react';

class AddTodo extends Component {

    state = {

        title: ''
    }

    render() {
        return (
            <form style={{display: 'flex'}}>

            <input
                type="text"
                name="title"
                style={{flex: '10', padding: '5px'}}
                placeholder="Add to do...."
            />

            <input
                type="submit"
                value="Submit"
                className="sub"
                style={{flex: '1'}}
            />

            </form>
        );
    }
}

export default AddTodo;