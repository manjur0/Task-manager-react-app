import { useEffect, useReducer, useState } from "react";
import { taskReducer } from "./ReducerFunction";
import "../../App.css";
import { getLocalStorage } from "./LocalStorage";
// Action types
const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
const EDIT_TASK = "EDIT_TASK";
const TOGGLE_TASK = "TOGGLE_TASK";

const TaskApp = () => {
  const [tasks, dispatch] = useReducer(taskReducer, getLocalStorage());
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      dispatch({ type: ADD_TASK, payload: newTask });
      setNewTask("");
    }
  };

  // setLocal storage for tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (id) => {
    dispatch({ type: DELETE_TASK, payload: id });
  };
  // edit task
  const editTask = (id) => {
    dispatch({ type: EDIT_TASK, payload: { id } });
  };

  const toggleTask = (id) => {
    dispatch({ type: TOGGLE_TASK, payload: id });
  };

  return (
    <div className="">
      <div className="  items-center  space-x-2  w-4/6 m-auto my-10">
        <h1 className="text-3xl text-center my-5 font-bold text-red-500">
          Task Management App
        </h1>
        <input
          className="  h-10 w-10/12  rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-white  focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
        ></input>
        <button
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={addTask}
        >
          Add Task
        </button>
        <div className="list-container ">
          {tasks.length > 0 ? (
            <ul className="table  w-[95%] mt-10 p-5 rounded-lg shadow-2xl  ">
              <h2 className="text-center text-xl text-red-500 font-extrabold">
                List Your Tasks !
              </h2>
              {tasks.map((task) => (
                <li className=" justify-between  " key={task.id}>
                  <input
                    className="w-4 h-4"
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                  <div>
                    <span
                      className="font-semibold text-lg"
                      style={{
                        textDecoration: task.completed
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {task.text}
                    </span>
                  </div>
                  <div>
                    <button
                      className="rounded-md text-red-500 px-3 py-2 my-3 text-sm font-semibold shadow-sm hover:bg-red-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black "
                      onClick={() => editTask(task.id)}
                    >
                      Edit
                    </button>
                    {/* Delete button */}
                    <button
                      className="rounded-md bg-black px-3 py-2 my-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black "
                      onClick={() => deleteTask(task.id)}
                    >
                      Delete
                    </button>

                    <br />
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="w-[95%] text-center text-red-500 text-xl font-extrabold mt-10 p-5 rounded-lg shadow-2xl   ">
              <h2>Your Task is Empty !</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskApp;
