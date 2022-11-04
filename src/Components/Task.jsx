import "./Task.scss";
import deleteIcon from "../assets/trash.svg";

const Task = ({ taskName, deleteTask, editTask, taskIndex }) => {
  return (
    <div className="Task">
      <img className="Task__delete" src={deleteIcon} onClick={() => deleteTask(taskIndex)}></img>
      <input type="text" defaultValue={taskName} onChange={(e) => editTask(e.target.value, taskIndex)} />
    </div>
  );
};

export default Task;
