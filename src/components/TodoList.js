import React from 'react'

const TodoList = (props) => {
  return (
    <li className='list-item'>
        {props.item}
   
    <span className='icon'><i className="fa-solid fa-trash-can"></i></span></li>
  )
}

export default TodoList

