import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { Todo } from "./Todo";
import { v4 as uuidv4 } from "uuid";
import EdittodoForm from "./Edittodoform";
uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  function addTodo(todo) {
    setTodos([
      ...todos,
      { id: uuidv4(), Task: todo, completed: false, isEditing: false },
    ]);
  }
  function EditTodo(id) {
    let finded = todos.map((todo, ind) =>
      todo.id === id ? todos[ind].Task : todo
    );
    console.log(finded);
    setTodos(finded);
  }
  function Edittask(Task, id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, Task, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  function EditTodo() {}
  return (
    <>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        // todo.isEditing ? (
        //   <EdittodoForm Edittodo={updatetask} Task={todo} />
        // ) : (
        <Todo
          Task={todo}
          key={index}
          deleteTodo={deleteTodo}
          EditTodo={EditTodo}
        />
      ))}
    </>
  );
};

export default TodoWrapper;
