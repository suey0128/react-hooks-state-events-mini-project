import React , { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [tasksOndisplay, setTasksOndisplay] = useState(TASKS)
  const [isActive, setISActive] = useState(false)


  const onClickChange = (e) => {
    const updateTasks = tasksOndisplay.filter((task) => task.text !== e.target.parentNode.children[1].textContent)
    setTasksOndisplay(updateTasks)
    setISActive(true)
   }

   const onCategoryChange = (e) => {
     setSelectedCategory(e.target.textContent)
     setISActive(true)
   }

   const filteredTasks = tasksOndisplay.filter((task) => {
    if (selectedCategory === "All") return true;
    return selectedCategory === task.category;})



  const onTaskFormSubmit = (newTask) => {
    setTasksOndisplay([...tasksOndisplay, newTask])
    setISActive(true)
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} 
                      onCategoryChange={onCategoryChange}
                      selectedCategory={selectedCategory}
      />
                      
      <NewTaskForm categories={CATEGORIES} 
                   onTaskFormSubmit={onTaskFormSubmit}
      />

      <TaskList tasks={TASKS}
                onClickChange={onClickChange}
                // tasksOndisplay={tasksOndisplay}
                filteredTasks={filteredTasks}
                isActive={isActive}
                />
    </div>
  );
}

export default App;
