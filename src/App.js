import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(){
    super();
    this.todoItem = [ //data
      { title: "Work", isDone: true },
      { title: "Eat bimbim", isDone: true },
      { title: "Sleep", isDone: true }
    ];
    this.state = {
      todoItemState: this.todoItem
    };
    this.doneClick = this.doneClick.bind(this);
  };

  doneClick(currentItem){
    for(let item of this.todoItem){
      if(item === currentItem){
        item.isDone = !item.isDone;
      }
    };
    this.setState({
      todoItemState: this.todoItem
    })
  }

  render() {
    return (
      <div className="App">
          { (this.todoItem.length > 0) && 
            this.todoItem.map((ele, idx, arr) => <TodoItem item = {ele} key ={idx} onClick = {this.doneClick.bind(this, ele)}/>)
          }
          { (this.todoItem.length === 0) && 'Nothing.'  }
      </div>
    );
    
  }
}

export default App;
