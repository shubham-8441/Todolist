 import React from 'react'
import {useState} from "react";

export const CreateTodo = ({addTodo}) => {


  const [title, setTitle] = useState(" ");
  const [desc, setDesc] = useState(" ");

  const submit = (e)=>{
    e.preventDefault();
    if (!title || !desc) {
      alert("None of title and decsription can be blank")
      
    }
    else{
      addTodo(title , desc );
      setTitle(" ");
      setDesc(" ");

    }

  }


    let divstyle={
        width: "40%",
    height: "123px",
    margin: "20px 110px",
    
    }

    let btnstyle = {
        margin:"70px 110px"
    }
  return (
    <div>
     
<form onSubmit={submit}>

<div className="mb-3" style={divstyle}>
  <label htmlFor="Task_title" className="form-label">Task Title </label>
  <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="exampleFormControlInput1" placeholder="Add you task title"/>
</div>


<div className="mb-3" style={divstyle}>
  <label htmlFor="exampleFormControlTextarea1" className="form-label"> Write your Task description here </label>
  <textarea className="form-control" value={desc}    onChange={(e)=>{setDesc(e.target.value)}}   id="exampleFormControlTextarea1" rows="3"  placeholder='Write about your task in detail'></textarea>
</div>

<button className='btn  btn-success btn-outline btn-primary px-2' style={btnstyle} type='submit'>create New task</button>



</form>
        </div>
  )
}
 

/* import React, { useState } from 'react';

export const CreateTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault(); // Prevents page refresh on form submission
    if (!title || !desc) {
      alert("none of title and description cannot be blank");
      return; // Exit early if inputs are invalid
    }
    addTodo(title, desc); // Call the `addTodo` function with title and desc
    setTitle(""); // Clear the title input
   setDesc(""); // Clear the description input
  };

  const divstyle = {
    width: "40%",
    height: "123px",
    margin: "20px 110px",
  };

  const btnstyle = {
    margin: "70px 110px",
  };

  return (
    <div>
      <form onSubmit={submit}>
        <div className="mb-3" style={divstyle}>
          <label htmlFor="Task_title" className="form-label">
            Task Title
          </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="exampleFormControlInput1"
            placeholder="Add your task title"
          />
        </div>

        <div className="mb-3" style={divstyle}>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Write your Task Description
          </label>
          <textarea
            className="form-control"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Write about your task in detail"
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-success btn-outline btn-primary px-2"
          style={btnstyle}
        >
          Create New Task
        </button>
      </form>
    </div>
  );
};
 */