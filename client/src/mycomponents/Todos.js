import React from 'react'
import {TodoItem} from "./TodoItem.js"




export const Todos = (props) => {

  

  return (
    <div className='container'>
      <h4 className="text-center my-3">Todos list</h4>
      {props.todos.map((todo) => {
        return <TodoItem   todo = {todo} onDelete = {props.onDelete} />
      })}
    </div>
  )
}

