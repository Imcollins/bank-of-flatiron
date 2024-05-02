import React from 'react';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search recent transaction..."
        style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}
      />
    </div>
  );
};

export default SearchBar;