import React from 'react';
import TaskList from './components/TaskList'
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
// import Calendar from './components/Calendar';


function App() {
    return (
        <div className="App" key="1">
            <div className="wrapper">
                <Header />
                <div className="container">
                    <LeftMenu />
                    <main>
                        {/* <Calendar /> */}
                        <TaskList key="1"/>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default App;
