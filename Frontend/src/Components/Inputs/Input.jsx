import React from 'react';
import './Input.css';

const Input = ({ label, placeholder, value, onChange }) => {
    return (
        <div className="input-container">
            <label>{label}</label>
            <input  label={label}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            variant="outlined"
            fullWidth
            margin="normal" />
        </div>
    );
};

export default Input;
