import React from 'react';

const TransactionForm = ({ formData, handleChange, handleSubmit }) => (
  <div style={{
    background: 'white',
    padding: '25px',
    borderRadius: '12px',
    marginBottom: '30px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
  }}>
    <h4 style={{ margin: '0 0 15px 0', color: '#1e293b' }}>
      Add New Expense
    </h4>

    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}
    >
      <input
        type="text"
        name="text"
        placeholder="Description"
        value={formData.text}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
        style={inputStyle}
      >
        <option value="">Select Category</option>
        <option value="Food & Dining">Food & Dining</option>
        <option value="Housing">Housing</option>
        <option value="Transport">Transport</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Shopping">Shopping</option>
        <option value="Healthcare">Healthcare</option>
        <option value="Education">Education</option>
      </select>

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
        style={inputStyle}
      />

      <button
        type="submit"
        style={{
          background: '#0f172a',
          color: 'white',
          padding: '10px 22px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: '600'
        }}
      >
        Add
      </button>
    </form>
  </div>
);

const inputStyle = {
  flex: 1,
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #e2e8f0',
  outline: 'none'
};

export default TransactionForm;
