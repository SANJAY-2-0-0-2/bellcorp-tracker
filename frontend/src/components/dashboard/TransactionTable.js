import React from 'react';
import { formatINR } from '../../utils/formatters';

const TransactionTable = ({ expenses, onDelete }) => (
  <div style={{
    background: 'white',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
  }}>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead style={{ background: '#f8fafc' }}>
        <tr>
          <th style={th}>Item</th>
          <th style={th}>Category</th>
          <th style={th}>Amount</th>
          <th style={{ ...th, textAlign: 'center' }}>Action</th>
        </tr>
      </thead>

      <tbody>
        {expenses.map(item => (
          <tr key={item._id} style={{ borderTop: '1px solid #e5e7eb' }}>
            <td style={td}>{item.text}</td>
            <td style={td}>{item.category}</td>
            <td style={{ ...td, fontWeight: 'bold' }}>
              {formatINR(item.amount)}
            </td>
            <td style={{ ...td, textAlign: 'center' }}>
              <button
                onClick={() => onDelete(item._id)}
                style={{
                  border: 'none',
                  background: 'none',
                  color: '#ef4444',
                  cursor: 'pointer'
                }}
              >
                <span className="material-icons">delete_outline</span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const th = {
  padding: '15px',
  textAlign: 'left',
  color: '#475569',
  fontSize: '14px'
};

const td = {
  padding: '15px',
  color: '#1e293b'
};

export default TransactionTable;
