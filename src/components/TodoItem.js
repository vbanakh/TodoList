import React, { Component } from 'react'

export class TodoItem extends Component {
    getStyle= () =>{
        return{
            borderBottom: '1px dotted #ccc',
            padding: '10px',
            background: '#f4f4f4',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
   
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={ this.getStyle() }>
                <p>
                    <input type="checkbox"  onChange={ this.props.markItem.bind(this, id) }/> {' '}
                    { title}
                    <button style={ btnStyle } onClick={ this.props.delItem.bind(this, id) }>x</button>
                </p>
            </div>
        )
    }
}

// const itemStyle ={
//     backgroundColor: 'blue'
// }

const btnStyle = {
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    cursor: 'pointer',
    border: 'none',
    padding: '5px 10px',
    float: 'right'
}

export default TodoItem
