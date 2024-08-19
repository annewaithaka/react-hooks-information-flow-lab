import React, { useState } from 'react';
import Header from './Header';
import Filter from './Filter';
import ShoppingList from './ShoppingList';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [category, setCategory] = useState('all');
  const items = [
    { id: 1, category: 'produce', name: 'Apple' },
    { id: 2, category: 'dairy', name: 'Milk' },
    { id: 3, category: 'bakery', name: 'Bread' },
  ];

  const toggleDarkMode = () => setIsDarkMode(prevMode => !prevMode);
  const handleCategoryChange = (newCategory) => setCategory(newCategory);

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Header onDarkModeClick={toggleDarkMode} isDarkMode={isDarkMode} />
      <Filter onCategoryChange={handleCategoryChange} />
      <ShoppingList items={items} category={category} />
    </div>
  );
};

export default App;
