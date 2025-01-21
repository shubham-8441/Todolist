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
 
