import { useEffect, useState } from 'react';
import axios from 'axios';

export const useTransactionLogic = () => {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    axios.get('http://localhost:5000/api/transactions')
      .then(res => setExpenses(res.data))
      .catch(err => console.error(err));
  }, []);

  const addExpense = async (data) => {
    const res = await axios.post('http://localhost:5000/api/transactions', data);
    setExpenses([res.data, ...expenses]);
  };

  const deleteExpense = async (id) => {
    await axios.delete(`http://localhost:5000/api/transactions/${id}`);
    setExpenses(expenses.filter(e => e._id !== id));
  };

  const filtered = expenses.filter(e => {
    const matchText = e.text.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCat = selectedCategory === 'All' || e.category === selectedCategory;
    return matchText && matchCat;
  });

  return {
    expenses: filtered,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    addExpense,
    deleteExpense,
    totalAmount: expenses.reduce((s, e) => s + e.amount, 0)
  };
};
