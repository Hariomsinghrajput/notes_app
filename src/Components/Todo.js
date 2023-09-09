import React from "react";

export const Todo = ({ Task, deleteTodo }) => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <p>{Task.Task}</p>
      <button onClick={() => deleteTodo(Task.id)}>X</button>
    </div>
  );
};

export default Todo;
