import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Logic & Data Management
import { useTransactionLogic } from '../hooks/useTransactionLogic';
import { formatINR } from '../utils/formatters';

// Modular UI Components
import StatCard from '../components/dashboard/StatCard';
import TransactionForm from '../components/dashboard/TransactionForm';
import TransactionTable from '../components/dashboard/TransactionTable';
import SearchBar from '../components/explorer/SearchBar';

const Dashboard = () => {
    const navigate = useNavigate();
    
    // I extract all the complex logic from the custom hook
    const { 
        expenses,          // This is the "Compound Filtered" list (Search + Category)
        totalAmount, 
        searchTerm, 
        setSearchTerm, 
        selectedCategory,   // State for the Category dropdown
        setSelectedCategory, // Function to change Category
        addExpense, 
        deleteExpense 
    } = useTransactionLogic();

    // Local state for the "Add New" form inputs
    const [formData, setFormData] = useState({ 
        text: '', 
        amount: '', 
        category: '', 
        date: '' 
    });

    // Updates form state as user types
    const handleInputChange = (e) => {
        setFormData({ 
            ...formData, 
            [e.target.name]: e.target.value 
        });
    };

    // Submits the new transaction to the context/storage
    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        // Basic validation
        if(!formData.text || !formData.amount || !formData.date) {
            alert("Please fill in all fields");
            return;
        }

        addExpense({ 
            ...formData, 
            id: Date.now(), 
            amount: parseFloat(formData.amount) 
        });

        // Reset the form fields back to empty
        setFormData({ text: '', amount: '', category: 'Food', date: '' });
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f1f5f9' }}>
            {/* Professional Navigation Bar */}
            <nav style={{ 
                background: '#0f172a', padding: '15px 40px', color: 'white', 
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span className="material-icons" style={{ color: '#3b82f6' }}>dashboard</span>
                    <h2 style={{ margin: 0, fontSize: '20px', letterSpacing: '0.5px' }}>BellCorp Analytics</h2>
                </div>
                <button 
                    onClick={() => navigate('/')} 
                    style={{ background: '#ef4444', border: 'none', color: 'white', padding: '8px 18px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}
                >
                    Logout
                </button>
            </nav>

            <div style={{ maxWidth: '1050px', margin: '40px auto', padding: '0 20px' }}>
                
                {/* Top Section: Quick Stats */}
                <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                    <h1>Expenses</h1>
                    <StatCard 
                        text="Total Expenditure" 
                        value={formatINR(totalAmount)} 
                        icon="payments" 
                        color="#10b981" 
                    />
                    <h1>All Transactions</h1>
                    <StatCard 
                        text="Entries" 
                        value={expenses.length} 
                        icon="inventory_2" 
                        color="#3b82f6" 
                    />
                </div>

                {/* Middle Section: Transaction Input Form */}
                <TransactionForm 
                    formData={formData} 
                    handleChange={handleInputChange} 
                    handleSubmit={handleFormSubmit} 
                />

                {/* Bottom Section: Explorer (Filter + Table) */}
                <div style={{ background: 'white', padding: '25px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <h3 style={{ margin: '0 0 15px 0', color: '#334155', fontWeight: '600' }}>Transaction Explorer</h3>
                        
                        {/* Search and Category Dropdown */}
                        <SearchBar 
                            searchTerm={searchTerm} 
                            setSearchTerm={setSearchTerm} 
                            selectedCategory={selectedCategory} 
                            setSelectedCategory={setSelectedCategory} 
                        />
                    </div>

                    {/* Data List Table */}
                    <TransactionTable 
                        expenses={expenses} 
                        onDelete={deleteExpense} 
                    />

                    {/* Empty State UI */}
                    {expenses.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '50px 0', color: '#64748b' }}>
                            <span className="material-icons" style={{ fontSize: '48px', color: '#cbd5e1' }}>find_in_page</span>
                            <p style={{ marginTop: '10px' }}>No records found for the current filters.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;