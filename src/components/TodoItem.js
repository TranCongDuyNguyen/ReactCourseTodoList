import React, { Component } from 'react';
import './TodoItem.css';
import classnames from 'classnames';
import checkImg from '../images/check.svg';
import checkDoneImg from '../images/check-done.svg';

class TodoItem extends Component{
    
    render(){
        const { item, onClick } = this.props; // const item = this.props.item
        /*let className = "TodoItem";
        
        if(item.isDone){
            className += " TodoItem-done"
        }*/

        let url = checkImg;
        if(item.isDone){
            url = checkDoneImg;
        }

        let TodoItemClassName = classnames({
            'TodoItem': true,
            'TodoItem-done': item.isDone
        })

        return(
            <div className = {TodoItemClassName} > 
                {/* ...your code */}
                <img src = {url} width = {32} height = {32} onClick = {onClick}/>
                <p>{item.title}</p>
            </div>
        );
    }
}

export default TodoItem;