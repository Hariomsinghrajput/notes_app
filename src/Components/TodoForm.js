import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setvalue] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setvalue(" ");
  };
  return (
    <div>
      <form className="todoform" onSubmit={handleSubmit}>
        <input
          name="todo-text"
          type="text"
          placeholder="what task to do"
          onChange={(e) => setvalue(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
