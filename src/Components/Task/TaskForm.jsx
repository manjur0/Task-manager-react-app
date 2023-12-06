import { useState } from "react";

const TaskForm = () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <input
        type="textarea"
        onChange={(e) => setDisabled(e.target.value)}
        placeholder="Enter a new task"
      ></input>{" "}
      <br />
      <button
        disabled={disabled ? true : false}
        onClick={() => setDisabled(true)}
      >
        Submit
      </button>
    </div>
  );
};

export default TaskForm;
