import { useState } from "react";
import Task from "./Task";
import "./TaskList.scss";
import addIcon from "../assets/add.svg";

const TaskList = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addNewTask = (e) => {
    e.preventDefault();
    setTaskList([...taskList, task]);
    setTask("");
  };

  const createTask = (value) => {
    setTask(value);
  };

  return (
    <div className="TaskList">
      <h1 className="TaskList__title">To-Do List</h1>
      <form onSubmit={(e) => addNewTask(e)}>
        <input type="text" value={task} onChange={(e) => createTask(e.target.value)} placeholder="Enter new task" />
        <img src={addIcon} onClick={addNewTask}></img>
      </form>
      <Task taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default TaskList;
