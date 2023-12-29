import React, { useState } from 'react'

const TodoInput = (props) => {
    const[inputText,setinputText]= useState('');
  return (
    <div className='input-container'>
        <input type='text' className='input-box-todo' placeholder='Enter your todo'  value={inputText}
        onChange={e=>{setinputText(e.target.value)}}></input>
        <button className='add-btn' onClick={()=>{props.addList(inputText)
            setinputText('')}}>+</button>
        <div>{inputText}</div>
    </div>
  )
}

export default TodoInput
