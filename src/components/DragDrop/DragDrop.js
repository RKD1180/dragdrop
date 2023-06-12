import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./DragDrop.css";
import TaskLists from "../TaskLists/TaskLists";

const DragDrop = () => {
  const [newTask, setNewTask] = useState("");
  const [from, setFrom] = useState("")
  const [todo, setTodo] = useState([]);
  const [doing, setDoing] = useState([]);
  const [done, setDone] = useState([]);
  const [trash, setTrash] = useState([]);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragStart = (task) => {
    return (event) => event.dataTransfer.setData("id", task);
  };

  const handleDoneDrop = (event,to) => {
    console.log(from);
    const data = event.dataTransfer.getData('id');
    console.log(event);
    setTodo((previous) => previous.filter((task) => task !== data));
    setDone((previous) => [...previous, data]);
  };

  const handleTodoDrop = (event,to) => {
    const data = event.dataTransfer.getData('id');
    setDone((previous) => previous.filter((task) => task !== data));
    setTodo((previous) => [...previous, data]);
  };

  const handleDoingDrop = (event,to) => {
    const data = event.dataTransfer.getData('id');
    setDone((previous) => previous.filter((task) => task !== data));
    setTodo((previous) => [...previous, data]);
  };

  const handleTrashDrop = (event,to) => {
    const data = event.dataTransfer.getData('id');
    setDone((previous) => previous.filter((task) => task !== data));
    setTodo((previous) => [...previous, data]);
  };

  return (
    <Container>
      <Row>
        <Col md={12} className="mt-5 mb-5">
          <h2 className="text-center fw-bold">Drag & Drop</h2>
          <h2 className="text-center fw-bold">Lean Kanban Board</h2>
        </Col>

        {/* search section */}

        <form>
          <Col md={12} className="d-flex justify-content-center">
            <Form.Control
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="w-50"
              type="text"
              placeholder="New Task"
            />
            <Button
              variant="dark"
              onClick={() => {
                setNewTask("");
                setTodo([...todo, newTask]);
              }}
            >
              Create
            </Button>
          </Col>
        </form>
      </Row>

      {/* Task section */}

      <Row className="mt-3 gap-5">
        <Col
          md={3}
          className="border px-0 border-dark rounded"
          onDragOver={(e)=>{
            handleDragOver(e)
          }}
          onClick={()=>setFrom("todo")}
          onDrop={(e) => handleTodoDrop(e, "todo")}
        >
          <Col className="todo p-2 text-center rounded">
            <h3>Todo</h3>
          </Col>
          <TaskLists handleDragStart={handleDragStart} data={todo} />
        </Col>
        <Col
          md={3}
          className="border px-0 border-dark rounded"
          onDragOver={(e)=>{
            handleDragOver(e,"doing")
           
          }}
          onClick={()=> setFrom("doing")}
          onDrop={(e) => handleDoingDrop(e, "doing")}
        >
          <Col className="doing p-2 text-center rounded">
            <h3>Doing</h3>
          </Col>
          <TaskLists handleDragStart={handleDragStart} data={doing} />
        </Col>
        <Col
          md={3}
          className="border px-0 border-dark rounded"
          onDragOver={(e)=>{
            handleDragOver(e, "done")
            setFrom("done")
          }}
          onDrop={(e) => handleDoneDrop(e, "done")}
        >
          <Col className="done p-2 text-center rounded">
            <h3>Done</h3>
          </Col>
          <TaskLists handleDragStart={handleDragStart} data={done} />
        </Col>
        <Col
          md={3}
          className="border px-0 border-dark rounded"
          onDragOver={(e)=>{
            handleDragOver(e, "trash")
            setFrom("trash")
          }}
          onDrop={(e) => handleTrashDrop(e, "trash")}
        >
          <Col className="trash p-2 text-center rounded">
            <h3>Trash</h3>
          </Col>
          <TaskLists handleDragStart={handleDragStart} data={trash} />
        </Col>
      </Row>
    </Container>
  );
};

export default DragDrop;
