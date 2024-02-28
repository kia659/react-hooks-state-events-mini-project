import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);

  const [category, setCategory] = useState("All");

  const filterTasks = tasks.filter(task => {
    if (category==="All"){
      return task
    }
    if (category===task.category){
      return task

    }

  }) 

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
function deleteTask(text){
  console.log(text)
  const updatedTasks = tasks.filter(task => task.text!==text)
  console.log(updatedTasks)
  setTasks(updatedTasks)
}
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} stateCategory = {category} setCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask} />
      <TaskList tasks={filterTasks} deleteTask={deleteTask}/>
    </div>
  );
}



export default App;