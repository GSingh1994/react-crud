const Task = ({ taskList, setTaskList }) => {
  const deleteTask = (currentTaskIndex) => {
    const newList = taskList.filter((e, index) => index !== currentTaskIndex);
    setTaskList(newList);
  };
  return (
    <ul>
      {taskList.map((task, i) => (
        <li key={i}>
          {task}
          <span onClick={() => deleteTask(i)} style={{ color: "red", cursor: "pointer" }}>
            X
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Task;
