import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(){
    super();

    this.state = {
      todoItems: [ //data
        { title: "Work", isDone: true },
        { title: "Eat bimbim", isDone: true },
        { title: "Sleep", isDone: true }
      ]
    };
    
  };

  doneClick(item){
    return(event) =>{
      let { todoItems } = this.state;
      let index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isDone: !item.isDone
          },
          ...todoItems.slice(index + 1)
        ]
      })
    }
  }

  render() {
    const { todoItems } = this.state;
    return (
      <div className="App">
          { (todoItems.length > 0) && 
            todoItems.map((ele, idx, arr) => <TodoItem item = {ele} key ={idx} onClick = {this.doneClick(ele)}/>)
          }
          { (todoItems.length === 0) && 'Nothing.'  }
      </div>
    );
    
  }
}

export default App;
