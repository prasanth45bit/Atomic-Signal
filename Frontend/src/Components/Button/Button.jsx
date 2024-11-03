import React from 'react';
import './Button.css';
import { useNavigate } from 'react-router-dom';

const Button = ({ icon, text, type, navi }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (navi) {
            navigate(navi);
        }
    };

    return (
        <button className={`button ${type}`} onClick={handleClick}>
            {icon && <img src={`/icons/${icon}.png`} alt={`${icon} icon`} className="icon" />}
            {text}
        </button>
    );
};

export default Button;
