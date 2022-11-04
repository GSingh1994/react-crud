import { useState } from "react";
import { nanoid } from "nanoid";

import Task from "./Task";
import "./TaskList.scss";
import addIcon from "../assets/add.svg";

const TaskList = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const createTask = (value) => {
    setTask(value);
  };

  const addNewTask = (e) => {
    e.preventDefault();
    setTaskList([...taskList, { id: nanoid(), taskName: task }]);
    setTask("");
  };

  const deleteTask = (currentTaskIndex) => {
    const newList = taskList.filter((e, index) => index !== currentTaskIndex);
    setTaskList(newList);
  };

  const editTask = (value, i) => {
    const newTaskList = [...taskList];
    newTaskList[i].taskName = value;
    setTaskList(newTaskList);
  };

  return (
    <div className="TaskList">
      <h1 className="TaskList__title">To-Do List</h1>

      <form onSubmit={(e) => addNewTask(e)}>
        <input type="text" value={task} onChange={(e) => createTask(e.target.value)} placeholder="Enter new task" />
        <img src={addIcon} onClick={addNewTask}></img>
      </form>

      {taskList.map((task, i) => (
        <Task key={task.id} taskName={task.taskName} taskIndex={i} deleteTask={deleteTask} editTask={editTask} />
      ))}
    </div>
  );
};

export default TaskList;
