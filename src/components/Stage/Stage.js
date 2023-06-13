import React from "react";
import "./Stage.css";
import { Button } from "react-bootstrap";

const Stage = ({ stage, todos, handleDragStart, clearFromTrash,title }) => {
  const stageTodos = todos.filter((todo) => todo.stage === stage);
 
  return (
    <>
      <ul className="task-list">
        {stageTodos.map((task, id) => (
          <span key={id}>
            <li
              id={task.id}
              draggable
              onDragStart={(event) => handleDragStart(event, task.id)}
            >
              <strong>{task.id}.</strong> {task.task}
            </li>
          </span>
        ))}
       { title=== "Trash" && <Button variant="danger" onClick={()=> clearFromTrash("Trash")}>Danger</Button>}
      </ul>
    </>
  );
};

export default Stage;
