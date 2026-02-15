import React from 'react';

// Used a functional component
const AuthInput = ({ icon, type, placeholder, value, onChange }) => {
    return (
        <div style={{ position: 'relative', marginBottom: '20px' }}>
            <span className="material-icons" style={{ 
                position: 'absolute', left: '12px', top: '12px', color: '#94a3b8', fontSize: '20px' 
            }}>
                {icon}
            </span>
            <input 
                type={type} 
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
                required 
                style={{ 
                    width: '100%', padding: '12px 12px 12px 40px', borderRadius: '8px', 
                    border: '1px solid #e2e8f0', boxSizing: 'border-box', outline: 'none',
                    fontSize: '14px'
                }}
            />
        </div>
    );
};

export default AuthInput;