import React from 'react'

export const CreateTodo = (props) => {

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
    
<form action="" onSubmit={props.addTodo}>

<div className="mb-3" style={divstyle}>
  <label for="Task_title" className="form-label">Task Title </label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Add you task title"/>
</div>


<div className="mb-3" style={divstyle}>
  <label for="exampleFormControlTextarea1" className="form-label"> Write your Task description here </label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"  placeholder='Write about your task in detail'></textarea>
</div>

<button className='btn  btn-success btn-outline btn-primary px-2' style={btnstyle}>create New task</button>



</form>
        </div>
  )
}
