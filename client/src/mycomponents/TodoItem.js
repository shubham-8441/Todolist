import React from 'react'

export const TodoItem = ({todo , onDelete}) => {
  return (
    <div>
      <h6>{todo.sno}
        {todo.title}</h6>
      <p>{todo.description}</p>
      <button className="btn btn-danger btn-sm" onClick={()=>onDelete(todo)}>Delete</button>
      
    </div>
  )
}


