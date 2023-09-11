import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setvalue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setvalue("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className=""
          type="text"
          placeholder="what task to do"
          onChange={(e) => setvalue(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
};

export default TodoForm;
