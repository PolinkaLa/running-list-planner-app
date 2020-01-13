import React from 'react';

function StatusMenu() {
    return <select>
            <option value="empty"></option>
            <option value="new">new</option>
            <option value="progress">in progress</option>
            <option value="done">done</option>
            <option value="cancel">cancel</option>
            <option value="next">next</option>
            <option value="prev">prev</option>
        </select>
}

export default StatusMenu;