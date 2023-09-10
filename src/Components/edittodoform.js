import React, { useState } from "react";

export const EdittodoForm = ({ Edittodo, Task }) => {
  const [value, setvalue] = useState(Task.Task);

  const handleSubmit = (e) => {
    e.preventDefault();
    Edittodo(value, Task.id);
    setvalue("");
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
          Update
        </button>
      </form>
    </div>
  );
};

export default EdittodoForm;
