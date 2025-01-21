// import logo from './logo.svg';
import './App.css';
import Header from  './mycomponents/Header';
import {CreateTodo} from  './mycomponents/CreateTodo';
import {Todos}  from './mycomponents/Todos';
import {Footer}  from './mycomponents/Footer.js';
import React, { useState } from "react";


function App() {

  // State for todos
const [todos, setTodos] = useState([
    
    {
      sno: 1,
      title: "Eat",
      desc: "You need to go to the mess",
    },
    {
      sno: 2,
      title: "Sleep",
      description: "You need to take a sleep",
    },
  ]);


  let sno;
  if (todos.length===0) {
    sno= 1
  }
  else{
    sno=todos[todos.length-1].sno +1
  };

  const addTodo = (title , desc)=>{
    console.log("I am adding this todo ," , title , desc);
    const myTodo = {
      sno:sno,
      title:title,
      desc:desc,
    }
    console.log(myTodo);
    setTodos([...todos ,myTodo])
  }




  // Function to delete a todo
  const onDelete = (todo) => {
    console.log("I am Deleting this  todo  : ", todo);


  //function to add a Todo

  // Update the todos state by filtering out the deleted todo
    setTodos(todos.filter((t) => t.sno !== todo.sno));
  };


  //setTodos(todos.filter((t) => t.sno == todo.sno));
  return (

  
  
    <div>
<Header  title = "My Todos list" searchbar = {false}/>
<Todos  key={sno} todos = {todos} onDelete ={onDelete}  />
<CreateTodo   addTodo = {addTodo}/>
<Footer/>
    </div>
  );
}

export default App;
