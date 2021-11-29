import React from 'react';
import Button from '../Button/Button';
import './Header.css';

const Header = ({onAdd, showAdd}) => {
    return (
        <div className="header">
            <h3>Task Record</h3>
            <Button text={showAdd ? "Close" : "Add"} color={showAdd ? "red" : "green"} onAdd={onAdd}/>
        </div>
    );
};

export default Header;