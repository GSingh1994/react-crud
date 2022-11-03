import "./Task.scss";
import deleteIcon from "../assets/trash.svg";

const Task = ({ taskList, setTaskList }) => {
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
    <ul className="Task">
      {taskList.map((task, i) => (
        <li className="Task__main" key={i}>
          <img className="Task__delete" src={deleteIcon} onClick={() => deleteTask(i)}></img>
          <input type="text" defaultValue={task} onChange={(e) => editTask(e.target.value, i)} />
        </li>
      ))}
    </ul>
  );
};

export default Task;
