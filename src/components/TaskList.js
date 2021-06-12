import React, { useState }from "react";
import { TASKS } from "../data";
import Task from "./Task";

function TaskList({ tasks, onClickChange, filteredTasks, isActive}) {
  // howto pass on task = TASK?
  // console.log('categoryActiveTL:',categoryActive, 'tasksTL:',tasks)



  return (
    <div className="tasks">
      {/* {tasksOndisplay.map(task => 
      <Task key={task.text} text={task.text} category={task.category} onClickChange={onClickChange}/>)} */}
       {isActive ? 
        (filteredTasks.map(task => <Task key={task.text} text={task.text} category={task.category} onClickChange={onClickChange}/>)) :
        (tasks.map(task => <Task key={task.text} text={task.text} category={task.category} onClickChange={onClickChange}/>))  } 
    </div>
  );
}

export default TaskList;
