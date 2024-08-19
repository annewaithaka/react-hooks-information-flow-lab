import React from 'react';

const Header = ({ onDarkModeClick = () => {}, isDarkMode = false }) => {
  return (
    <header className={isDarkMode ? 'dark' : 'light'}>
      <h1>Shopping List</h1>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
