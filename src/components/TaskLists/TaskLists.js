import React from "react";
import "./TaskList.css";

const TaskLists = ({ handleDragStart, data }) => {
  return (
    <>
      <ul className="task-list">
        {data.map((task, id) => (
          <li key={id} draggable onDragStart={()=>handleDragStart(task)}>
            {task}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskLists;
