import { useState } from "react";
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
    setTaskList([...taskList, task]);
    setTask("");
  };

  const deleteTask = (currentTaskIndex) => {
    const newList = taskList.filter((e, index) => index !== currentTaskIndex);
    setTaskList(newList);
  };

  const editTask = (value, i) => {
    const newTaskList = [...taskList];
    newTaskList[i] = value;
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
        <Task key={i} taskValue={task} taskIndex={i} deleteTask={deleteTask} editTask={editTask} />
      ))}
    </div>
  );
};

export default TaskList;
