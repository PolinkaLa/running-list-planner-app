import React from 'react';
import Task from './Task'

function TasksTable() {
    return (
        <div className="App">
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
                <tr>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                    <th>4</th>
                    <th>5</th>
                    <th>6</th>
                    <th>7</th>
                    <th>Tasks</th>
                </tr>
                    <Task/>
                    <Task/>
                </tbody>
            </table>
        </div>
    );
}

export default TasksTable;
