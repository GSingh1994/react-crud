import Task from "./Task";
import "./TaskList.scss";

import { useState } from "react";

const TaskList = () => {
  const [task, setTask] = useState("");

  const addNewTask = (e) => {
    e.preventDefault();
    console.log(task);
  };
  return (
    <div className="TaskList">
      <h1>Tasklist</h1>
      <form>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={addNewTask}>Add</button>
      </form>
      <Task />
    </div>
  );
};

export default TaskList;
