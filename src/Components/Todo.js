import React from "react";

export const Todo = ({ Task, deleteTodo, EditTodo }) => {
  return (
    <div>
      <p>{Task.Task}</p>
      <button className="" onClick={() => deleteTodo(Task.id)}>
        X
      </button>
      <button onClick={() => EditTodo(Task.id)}>E</button>
    </div>
  );
};

export default Todo;
