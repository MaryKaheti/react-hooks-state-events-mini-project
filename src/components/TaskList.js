import React from "react";
import task from "./Task"

function TaskList(tasks, onTaskDelete) {
  const taskList = task.map((task) => (
    <task key = {task.text} text = {task.text} category = {task.category} onTaskDelete = {task.onTaskDelete}/>
  ) ) 
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {TaskList}
    </div>
  );
}

export default TaskList;
