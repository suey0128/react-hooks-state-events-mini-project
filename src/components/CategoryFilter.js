import React, { useState } from "react";

function CategoryFilter({ categories, onCategoryChange, selectedCategory }) {



 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => <button key={category} 
                                            onClick={onCategoryChange}
                                            className={selectedCategory === category ? "selected" : ""}


      >{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
