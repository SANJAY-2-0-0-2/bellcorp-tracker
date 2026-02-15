import { createContext, useReducer } from 'react';

const TransactionContext = createContext();

const initialState = {
  transactions: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TRANSACTIONS':
      return { transactions: action.payload };

    case 'ADD_TRANSACTION':
      return {
        transactions: [action.payload, ...state.transactions]
      };

    case 'DELETE_TRANSACTION':
      return {
        transactions: state.transactions.filter(
          t => t._id !== action.payload
        )
      };

    default:
      return state;
  }
};

export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // GET
  const fetchTransactions = async () => {
    const res = await fetch('http://localhost:5000/api/transactions');
    const data = await res.json();
    dispatch({ type: 'SET_TRANSACTIONS', payload: data });
  };

  
  const addTransaction = async (transaction) => {
    const res = await fetch('http://localhost:5000/api/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        description: transaction.description,
        amount: Number(transaction.amount),
        category: transaction.category,
        date: transaction.date
      })
    });

    if (!res.ok) {
      throw new Error('Failed to save transaction');
    }

    const data = await res.json();
    dispatch({ type: 'ADD_TRANSACTION', payload: data });
  };

  // DELETE
  const deleteTransaction = async (id) => {
    await fetch(`http://localhost:5000/api/transactions/${id}`, {
      method: 'DELETE'
    });
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        fetchTransactions,
        addTransaction,
        deleteTransaction
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContext;
