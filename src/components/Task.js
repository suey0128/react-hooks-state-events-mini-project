import React from "react";

function Task({ text, category, onClickChange }) {



  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onClickChange}>X</button>
      {/* <button className="delete" onClick={e=>console.log(e.target.parentNode.children[1])}>X</button> */}
    </div>
  );
}

export default Task;
