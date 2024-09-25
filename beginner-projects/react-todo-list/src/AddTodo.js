import React, { State, useState } from "react";

function AddTodo() {
  // Initializing the state for the tasks
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Function to add the task
  function addTask() {
    if (newTask) {
      setTasks([...tasks, newTask]);

      //console.log(tasks);
      setNewTask("");
    }
  }

  // Function to render tasks based on logic
  function renderTasks() {
    if (tasks.length === 0) {
      return <p>Rejoice! You have nothing to worry about!</p>;
    } else {
      return (
        <ul>
          {tasks.map((task, index) => (
            <React.Fragment key={index}>
              {index !== 0 && <hr />}
              <li>
                <input type="checkbox" />
                {task}
              </li>
            </React.Fragment>
          ))}
        </ul>
      );
    }
  }

  return (
    <>
      <div className="add-todo">
        <input
          id="add"
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="add-todo" onClick={addTask}>
          Add Task
        </button>
      </div>

      <div className="tasklist">{renderTasks()}</div>
    </>
  );
}

export default AddTodo;
