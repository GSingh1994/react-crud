const Task = ({ taskList, setTaskList }) => {
  const deleteTask = (currentTaskIndex) => {
    const newList = taskList.filter((e, index) => index !== currentTaskIndex);
    setTaskList(newList);
  };

  const editTask = (i) => {
    const newTask = prompt("enter new task");
    const newTaskList = [...taskList];
    newTaskList[i] = newTask;
    setTaskList(newTaskList);
  };
  return (
    <ul>
      {taskList.map((task, i) => (
        <li key={i} onDoubleClick={() => editTask(i)}>
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
