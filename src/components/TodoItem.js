import React, { Component } from 'react';
import './TodoItem.css';
import checkImg from '../images/check.svg';
import checkDoneImg from '../images/check-done.svg';

import classnames from 'classnames';
import PropTypes from 'prop-types';

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

TodoItem.propTypes = { // validate passing props
    item: PropTypes.shape({ // shape object
        title: PropTypes.string.isRequired, // must have this property in props
        isDone: PropTypes.bool
    }),
    onClick: PropTypes.func
};
export default TodoItem;