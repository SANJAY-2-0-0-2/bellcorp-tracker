import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory }) => (
  <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
    <div style={searchBox}>
      <span className="material-icons" style={{ color: '#94a3b8' }}>
        search
      </span>
      <input
        type="text"
        placeholder="Search by description..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={searchInput}
      />
    </div>

    <select
      value={selectedCategory}
      onChange={e => setSelectedCategory(e.target.value)}
      style={selectStyle}
    >
      <option value="All">All Categories</option>
      <option value="Food & Dining">Food & Dining</option>
      <option value="Housing">Housing</option>
      <option value="Transport">Transport</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
      <option value="Shopping">Shopping</option>
      <option value="Healthcare">Healthcare</option>
      <option value="Education">Education</option>
    </select>
  </div>
);

const searchBox = {
  flex: 2,
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  background: 'white',
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #e2e8f0'
};

const searchInput = {
  border: 'none',
  outline: 'none',
  width: '100%'
};

const selectStyle = {
  flex: 1,
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
  background: 'white'
};

export default SearchBar;
