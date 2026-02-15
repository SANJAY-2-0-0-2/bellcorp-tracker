import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulating authentication
        if(email && password) {
            navigate('/dashboard');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' }}>
            <div style={{ padding: '40px', background: 'white', borderRadius: '15px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)', width: '100%', maxWidth: '400px' }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <span className="material-icons" style={{ fontSize: '48px', color: '#3b82f6' }}>account_balance_wallet</span>
                    <h2 style={{ margin: '10px 0 5px 0', color: '#1e293b' }}>BellCorp Tracker</h2>
                    <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>Please sign in to your account</p>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div style={{ position: 'relative', marginBottom: '20px' }}>
                        <span className="material-icons" style={{ position: 'absolute', left: '12px', top: '12px', color: '#94a3b8', fontSize: '20px' }}>email</span>
                        <input 
                            type="email" placeholder="admin@bellcorp.com" required 
                            style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div style={{ position: 'relative', marginBottom: '25px' }}>
                        <span className="material-icons" style={{ position: 'absolute', left: '12px', top: '12px', color: '#94a3b8', fontSize: '20px' }}>lock</span>
                        <input 
                            type="password" placeholder="••••••••" required 
                            style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '8px', border: '1px solid #e2e8f0', boxSizing: 'border-box' }}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" style={{ width: '100%', padding: '12px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;