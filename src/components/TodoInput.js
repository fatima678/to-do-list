import React, { useState } from 'react'

const TodoInput = () => {
    const[inputText,setinputText]= useState('');
  return (
    <div className='input-container'>
        <input type='text' className='input-box-todo' placeholder='Enter your todo' 
        onChange={e=>{setinputText(e.target.value)}}></input>
        <button className='add-btn'>+</button>
        <div>{inputText}</div>
    </div>
  )
}

export default TodoInput
