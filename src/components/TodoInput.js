import React, { useState } from 'react'

const TodoInput = (props) => {
    const[inputText,setinputText]= useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setinputText('')
        }

    }
  return (
    <div className='input-container'>
        <input type='text' className='input-box-todo' placeholder='Enter your todo'  value={inputText}
        onChange={e=>{setinputText(e.target.value)}} onKeyDown={handleEnterPress}></input>
        <button className='add-btn' onClick={()=>{props.addList(inputText)
            setinputText('')}}>+</button>
        <div>{inputText}</div>
    </div>
  )
}

export default TodoInput
