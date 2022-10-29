import Task from "./Task";
import "./TaskList.scss";
const TaskList = () => {
  return (
    <div className="TaskList">
      <h1>Tasklist</h1>
      <Task />
    </div>
  );
};

export default TaskList;
