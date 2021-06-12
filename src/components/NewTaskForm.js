import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit}) {

  const categoriesOnForm = categories.filter((category) => category !=="All")

  const [details, setDetails] = useState("")
  const [formseletedcategory, setFormseletedcategory] = useState("Code")

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      text: details,
      category: formseletedcategory
  }
  onTaskFormSubmit(newTask);
  }


  return (
    <form className="new-task-form" onSubmit={submitHandler}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={(e)=>setDetails(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={formseletedcategory} onChange={(e)=>setFormseletedcategory(e.target.value)}>
          {categoriesOnForm.map(category => <option key={category} 
          value={category}
          >{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
