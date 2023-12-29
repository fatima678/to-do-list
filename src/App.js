import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const [listTodo, setlistTodo] = useState([]);

  let addList = (inputText) => {
    if(inputText!=='')
    // Use the spread operator to create a new array with the existing todos and the new one
    setlistTodo([...listTodo, inputText]);
  };

  const deleteListItem = (key)=>{
    let  newTodo = [...listTodo];
    newTodo.splice(key,1)
    setlistTodo([...newTodo])
  }
  return (
    <div className='main-container'>
      <div className='center-container'>
        <TodoInput addList={addList} />
        <h1 className='apps-heading'>To-DO-List</h1>
        <hr  className='underline'/>
        {listTodo.map((listItem, i) => (
          <TodoList index={i} key={i} item={listItem}  deleteItem={deleteListItem}/>
        ))}
      </div>
    </div>
  );
};

export default App;
