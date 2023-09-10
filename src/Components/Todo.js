import React from "react";

export const Todo = ({ Task, deleteTodo, EditTodo }) => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <p>{Task.Task}</p>
      <button onClick={() => deleteTodo(Task.id)}>X</button>
      <button onClick={() => EditTodo(Task.id)}>E</button>
    </div>
  );
};

export default Todo;
