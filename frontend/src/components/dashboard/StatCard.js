import React from 'react';

const StatCard = ({ title, value, icon, color }) => (
    <div style={{ 
        background: 'white', padding: '20px', borderRadius: '12px', flex: 1,
        display: 'flex', alignItems: 'center', gap: '15px', 
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderLeft: `6px solid ${color}` 
    }}>
        <div style={{ background: `${color}20`, padding: '12px', borderRadius: '50%', color: color }}>
            <span className="material-icons">{icon}</span>
        </div>
        <div>
            <p style={{ margin: 0, color: '#64748b', fontSize: '12px', fontWeight: 'bold' }}>{title}</p>
            <h2 style={{ margin: 0, color: '#1e293b', fontSize: '22px' }}>{value}</h2>
        </div>
    </div>
);

export default StatCard;