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
      title: "Study",
      description: "You need to go to study",
    },
    {
      sno: 2,
      title: "Eat",
      description: "You need to go to the mess",
    },
    {
      sno: 3,
      title: "Sleep",
      description: "You need to take a sleep",
    },
  ]);

  // Function to delete a todo
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);


  //function to add a Todo

  // Update the todos state by filtering out the deleted todo
    setTodos(todos.filter((t) => t.sno !== todo.sno));
  };

  return (

  
  
    <div>
<Header  title = "My Todos list" searchbar = {false}/>
<Todos  todos = {todos} onDelete ={onDelete}  />
<CreateTodo/>
<Footer/>
    </div>
  );
}

export default App;
