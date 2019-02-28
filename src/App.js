import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import tickImg from './images/tick.svg';

class App extends Component {
  constructor(){
    super();

    this.state = {
      newItem: "",
      todoItems: [ //data
        { title: "Work", isDone: true },
        { title: "Eat bimbim", isDone: true },
        { title: "Sleep", isDone: true }
      ]
    };
    
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  };
  
  doneClick(item){
    return(event) =>{ // don't need to bind this method because of arrow function
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

  onKeyUp(event){
    let { todoItems } = this.state;
    let text = event.target.value;
    if (event.keyCode === 13){
      if (!text) { return; };
      text = text.trim();
      if (!text) { return; };
      this.setState({
        newItem: "",
        todoItems:[
          {
            title: text,
            isDone: false
          },
          ...todoItems
        ]
      })
    }
  }

  onChange(event){ //this function always goes with value atr of input element
    this.setState({
      newItem: event.target.value
    })
  }

  render() {
    const { todoItems, newItem } = this.state;
    return (
      <div className="App">
      <div className="Header">
        <img src = {tickImg} width = {32} height = {32} />
        <input type = "text" 
              placeholder = "Type something" 
              onKeyUp = {this.onKeyUp} 
              onChange = {this.onChange}
              value = {newItem}>
        </input>
      </div>
          { (todoItems.length > 0) && 
            todoItems.map((ele, idx, arr) => <TodoItem item = {ele} key ={idx} onClick = {this.doneClick(ele)}/>)
          }
          { (todoItems.length === 0) && 'Nothing.'  }
      </div>
    );
    
  }
}

export default App;
