import React, { useState } from 'react';

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter(item => item.category === selectedCategory);

  return (
    <div>
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Dessert">Dessert</option>
      </select>
      <div className="Items">
        {filteredItems.map(item => (
          <div key={item.id} className="item">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingList;
