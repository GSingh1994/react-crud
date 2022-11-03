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
    <ul>
      {taskList.map((task, i) => (
        <li key={i}>
          <input type="text" defaultValue={task} onChange={(e) => editTask(e.target.value, i)} />
          <span onClick={() => deleteTask(i)} style={{ color: "red", cursor: "pointer" }}>
            X
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Task;
