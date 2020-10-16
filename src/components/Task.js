import React, { Component } from 'react';
import PropTypes from 'prop-types';





export default class Task extends Component {

    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' :  'none'

        }
    }
    render() {
        const { id, title } = this.props.task;
        
        return (   
         <p style={this.StyleCompleted()} >          
         {title} - 
            <input  type="checkbox" onChange={this.props.checkDone.bind(this, id)} />
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, id)}>
                x
            </button>
            </p>
        )
  
        }
}

Task.prototypes = {
    task: PropTypes.object.isRequerid
}

const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',
    


           
        
}

