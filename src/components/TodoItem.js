import React, { Component } from 'react';
import './TodoItem.css';
import classnames from 'classnames';
class TodoItem extends Component{
    
    render(){
        const { item, onClick } = this.props; // const item = this.props.item
        /*let className = "TodoItem";
        
        if(item.isDone){
            className += " TodoItem-done"
        }*/
        let TodoItemClassName = classnames({
            'TodoItem': true,
            'TodoItem-done': item.isDone
        })

        return(
            <div className = {TodoItemClassName} onClick = {onClick}> 
                {/* ...your code */}
                <p>{item.title}</p>
            </div>
        );
    }
}

export default TodoItem;