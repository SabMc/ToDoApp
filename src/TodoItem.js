import React from "react";

import "./TodoItem.css";

function TodoItem() {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <p>Here is my task</p>
    </div>
  );
}

export default TodoItem;
