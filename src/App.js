import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import tickImg from './images/tick.svg';

class App extends Component {
  constructor(){
    super();

    this.state = {
      newItem: "",
      currentState: {
        all: true,
        active: false,
        completed: false
      },
      todoItems: [ //data
        { title: "Work", isDone: true },
        { title: "Eat bimbim", isDone: true },
        { title: "Sleep", isDone: true }
      ]
    };
    
    this.inputRef = React.createRef();

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onAllClick = this.onAllClick.bind(this);
    this.onActiveClick = this.onActiveClick.bind(this);
    this.onCompletedClick = this.onCompletedClick.bind(this);
  };
  
  componentDidMount(){
    this.inputRef.current.focus();
  }

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

  onAllClick(){
    let { currentState } = this.state;
    this.setState({
      currentState: {...currentState, all: true, active: false, completed: false}
    })
  }

  onActiveClick(){
    let { currentState } = this.state;
    this.setState({
      currentState: {...currentState, active: true, all: false, completed: false }
    })
  }

  onCompletedClick(){
    let { currentState } = this.state;
    this.setState({
      currentState: {...currentState, active: false, all: false, completed: true }
    })
  }

  render() {
    const { todoItems, newItem, currentState } = this.state;
    let displayItems = [];
    if(currentState.all){
      displayItems = todoItems;
    }
    else if(currentState.active){
      displayItems = todoItems.filter(function(item){
        return !item.isDone;
      })
    }
    else if(currentState.completed){
      displayItems = todoItems.filter(function(item){
        return item.isDone;
      })
    }
    return (
      <div className="App">
      <div className="Header">
        <img src = {tickImg} width = {32} height = {32} />
        <input type = "text" 
              placeholder = "Type something" 
              onKeyUp = {this.onKeyUp} 
              onChange = {this.onChange}
              value = {newItem}
              ref = {this.inputRef}>
        </input>
      </div>
          { (todoItems.length > 0) && 
            displayItems.map((ele, idx, arr) => <TodoItem item = {ele} key ={idx} onClick = {this.doneClick(ele)}/>)
          }
          { (todoItems.length === 0) && 'Nothing.'  }
      <div className="Footer">
          <div onClick = {this.onAllClick}>All</div>
          <div onClick = {this.onActiveClick}>Active</div>
          <div onClick = {this.onCompletedClick}>Completed</div>
      </div>
      </div>
    );
    
  }
}

export default App;
