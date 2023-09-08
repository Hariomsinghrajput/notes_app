import React,{useState} from 'react'
import TodoForm from './TodoForm'
import {Todo}  from './Todo'

 const TodoWrapper = () => {
  const [todos , setTodos]= useState([])
 function addTodo(todo) {
    //setTodos([...todos, {id :uuidv4() ,Task:todo, completed:false , isEditing:false}])
  }
  return (
    <div>
      <TodoForm  addTodo={addTodo} />
      {todos.map((todo , index)=>(
       <Todo Task={todo} key={index}/> 
       ))}
    </div>
  )
}

export default TodoWrapper