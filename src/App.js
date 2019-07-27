import React from 'react';
import TasksTable from './TasksTable';
import Calendar from './Calendar'


function App() {
    return (
        <div className="App">
            <Calendar/>
            <TasksTable/>
        </div>
    );
}

export default App;
