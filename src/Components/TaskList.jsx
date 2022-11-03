import Task from "./Task";
import "./TaskList.scss";
import addIcon from "../assets/add.svg";

import { useState } from "react";

const TaskList = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addNewTask = (e) => {
    e.preventDefault();
    setTaskList([...taskList, task]);
    setTask("");
  };
  return (
    <div className="TaskList">
      <h1 className="TaskList__title">To-Do List</h1>
      <form>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <img src={addIcon} onClick={addNewTask}></img>
      </form>
      <Task taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};

export default TaskList;
