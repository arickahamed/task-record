import React from 'react';
import './Button.css';

const Button = ({text, color, onAdd}) => {
    return (
        <button className="button" onClick={onAdd} style={{backgroundColor: color}}>{text}</button>
    );
};

export default Button;