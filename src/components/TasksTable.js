import React from 'react';
import Task from './Task'

function TasksTable() {
    return (
            <table>
                <tbody>
                <tr>
                    <th>Wo</th>
                    <th>Tu</th>
                    <th>We</th>
                    <th>Th</th>
                    <th>Fr</th>
                    <th>Sa</th>
                    <th>Su</th>
                    <th></th>
                </tr>
                <Task/>
                <Task/>
                </tbody>
            </table>
    );
}

export default TasksTable;
