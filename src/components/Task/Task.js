import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './Task.css';

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder': ''}`} onDoubleClick={()=>onToggle(task.id)}>
            <div className="task-content">
                <h3>{task.text}</h3>
                <p>{task.day}</p>
            </div>
            <div className="task-icon">
                <FaTimes onClick={()=>onDelete(task.id)}/>
            </div>
        </div>
    );
};

export default Task;