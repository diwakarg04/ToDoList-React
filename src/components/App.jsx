import React, { useState } from "react";

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

function App() {
  const [inputtext , setinputtext] = useState("Add Item") ;
  const [items , setItems] = useState([]) ;

  function handleChange(event){
    const value = event.target.value ;
    setinputtext(value) ;
  }

  function handleCLick(){
    setItems((prevValue) =>{
      return [...prevValue , inputtext] ;
    }) 
    setinputtext("") ;
} 
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
          type="text"
          value = {inputtext}
          onChange = {handleChange}  />
        <button onClick = {handleCLick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todolist => <li> {todolist} </li>)} 
        </ul>
      </div>
    </div>
  );
}

export default App;
