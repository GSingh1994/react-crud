import Task from "./Task";
import "./TaskList.scss";

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
      <h1>Tasklist</h1>
      <form>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={addNewTask}>Add</button>
      </form>
      <Task taskList={taskList} />
    </div>
  );
};

export default TaskList;
