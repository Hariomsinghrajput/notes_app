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
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  function EditTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
    console.log("clicked");
  }
  const Edittask = (Task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, Task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EdittodoForm Edittodo={Edittask} Task={todo} />
        ) : (
          <Todo
            Task={todo}
            key={index}
            deleteTodo={deleteTodo}
            EditTodo={EditTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
