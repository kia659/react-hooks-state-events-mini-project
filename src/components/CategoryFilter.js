import React from "react";

function CategoryFilter({ categories, stateCategory, setCategory }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button className = {category===stateCategory? "selected": null }onClick={()=> setCategory(category)} key={category}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
