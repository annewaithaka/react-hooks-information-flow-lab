import React from 'react';

const Filter = ({ onCategoryChange = () => {} }) => {
  return (
    <select
      onChange={(e) => onCategoryChange(e.target.value)}
      role="combobox"
      aria-label="Category Filter" // Adding an accessible label
    >
      <option value="all">All</option>
      <option value="produce">Produce</option>
      <option value="dairy">Dairy</option>
      <option value="bakery">Bakery</option>
    </select>
  );
};

export default Filter;
