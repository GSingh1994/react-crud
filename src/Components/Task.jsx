const Task = ({ taskList }) => {
  return (
    <>
      <ul>
        {taskList.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
    </>
  );
};

export default Task;
