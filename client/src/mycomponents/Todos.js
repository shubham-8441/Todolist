 import React from 'react'
import {TodoItem} from "./TodoItem.js"




export const Todos = (props) => {


  return (
    <div className='container'>
      <h4 className="text-center my-3">Todos List</h4>
      {props.todos && props.todos.length === 0 ? (
         "No added Todos to display"
      ) : (
        props.todos.map((todo) => {
          return (
            <React.Fragment key={props.key}>
              <TodoItem todo={todo} onDelete={props.onDelete} />
              <hr />
            </React.Fragment>
          );
        })
      )}
    </div>
  )
}

 







/* import React from 'react';
import { TodoItem } from "./TodoItem.js";

export const Todos = (props) => {
  return (
    <div className='container'>
      <h4 className="text-center my-3">Todos List</h4>
      {props.todos && props.todos.length === 0 ? (
        "No Todos to display"
      ) : (
        props.todos.map((todo) => {
          return (
            <React.Fragment key={todo.sno}>
              <TodoItem todo={todo} onDelete={props.onDelete} />
              <hr />
            </React.Fragment>
          );
        })
      )}
    </div>
  );
};
 */