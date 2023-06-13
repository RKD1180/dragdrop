import React from "react";
import "./Stage.css";

const Stage = ({
  stage,
  todos,
  handleDragStart,
}) => {
  const stageTodos = todos.filter((todo) => todo.stage === stage);
  return (
    <>
      <ul className="task-list">
        {stageTodos.map((task, id) => (
          <li key={id} id={task.id} draggable onDragStart={(event) => handleDragStart(event,task.id)}>
            <strong>{task.id}.</strong> {task.task}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Stage;
