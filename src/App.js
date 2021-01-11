import React, {Component} from 'react';
import Todos from "./Components/Todos";
import './App.css';
import Header from "./Components/layout/Header";
import AddTodo from "./Components/AddTodo";

class App extends Component {

    state = {
        todos: [
            {
                id: 1,
                title: "Take out the trash",
                completed: false
            },

            {
                id: 2,
                title: "Get the monkey from the zoo",
                completed: false
            },

            {
                id: 3,
                title: "Learn React",
                completed: false
            },
        ]
    }


    markComplete = (id) => {
        this.setState({
            todos1: this.state.todos.map(todoVar => {

                if (todoVar.id === id) {
                    todoVar.completed = !todoVar.completed;
                }

                return todoVar;
            })
        })
    }

    deleteBtn = (id) => {

        this.setState({todos: [...this.state.todos.filter(todoVar1 => todoVar1.id !== id)]});
    }


    render() {
        return (
            <div className="App">
                <div className="container">
                <Header/>
                <AddTodo/>
                <Todos todosProps={this.state.todos} markCompleteTodosProps={this.markComplete}
                       deleteBtnTodosProps={this.deleteBtn}/>
                </div>
            </div>
        );

    }
}

export default App;
