/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import Task from '../components/Task';
// import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
// import Help from './Help';
import avatar from '../img/avatar.png';
// import Modal from '.Modal';
import { SHORT_WEEK_DAY } from '../components/Constants';
import menuProfileIcon from '../img/user.svg';
import menuImportIcon from '../img/import.svg';
import menuExportIcon from '../img/export.svg';
import menuDeleteIcon from '../img/del.svg';
import menuHelpIcon from '../img/help.svg';
import menuMailIcon from '../img/mail.svg';


function getWeekRange(date) {
    return {
        from: moment(date)
            .startOf('isoweek')
            .toDate(),
        to: moment(date)
            .endOf('isoweek')
            .toDate(),
    };
}

function getWeekDays(weekStart) {
    const days = [weekStart];
    for (let i = 1; i < 7; i += 1) {
        days.push(
            moment(weekStart)
                .add(i, 'days')
                .toDate()
        );
    }
    return days;
}

class Calendar extends Component {
    state = {
        hoverRange: undefined,
        selectedDays: [],
        taskData: []
    };

    handleDayChange = date => {
        this.setState({
            selectedDays: getWeekDays(getWeekRange(date).from),
        });
    };

    handleDayEnter = date => {
        this.setState({
            hoverRange: getWeekRange(date),
        });
    };

    handleDayLeave = () => {
        this.setState({
            hoverRange: undefined,
        });
    };

    handleWeekClick = (weekNumber, days, e) => {
        this.setState({
            selectedDays: days,
        });
    };

    addNewTask = event => {
        console.log("add new task");
        localStorage.plannerApp = JSON.stringify([...this.state.taskData,
            {
                "id": JSON.parse(localStorage.plannerApp).length+1,
                "mo": null,
                "tu": null,
                "we": null,
                "th": null,
                "fr": null,
                "sa": null,
                "su": null,
                "taskText": ""
            }])
        this.setState({
            taskData: JSON.parse(localStorage.plannerApp)
        })
    }

    cleanStorage = () => {
        localStorage.plannerApp ="[]";
        this.setState({
            taskData: JSON.parse(localStorage.plannerApp)
        })
    }

    componentDidMount() {
        this.handleDayChange(new Date());
        this.setState({
            taskData: JSON.parse(localStorage.plannerApp)
        })
        
        // TODO get real fetch request
        // const url = `http://d74ev.mocklab.io/tasks`
        // fetch(url)
        //     .then(response => response.json())
        //     .then(json => this.setState({
        //         taskData: json
        //     }))
    }

    render() {
        if (!localStorage.plannerApp) {
            localStorage.plannerApp="[]";
        }
        const { /* hoverRange, */ selectedDays, taskData} = this.state;

        // const daysAreSelected = selectedDays.length > 0;

        // const modifiers = {
        //     hoverRange,
        //     selectedRange: daysAreSelected && {
        //         from: selectedDays[0],
        //         to: selectedDays[6],
        //     },
        //     hoverRangeStart: hoverRange && hoverRange.from,
        //     hoverRangeEnd: hoverRange && hoverRange.to,
        //     selectedRangeStart: daysAreSelected && selectedDays[0],
        //     selectedRangeEnd: daysAreSelected && selectedDays[6],
        // };
        
        return (
        <div className="wrapper">
            <header>
                <div>
                    <h1>
                        Running List Planner
                    </h1>
                </div>
                <div>
                    <h2>Polina Lappo</h2>
                    <img src={avatar}/>
                </div>
            </header>
            <div className="container">
                <aside>
                    <div>
                        <span><object type="image/svg+xml" data={menuProfileIcon} /></span>
                        <span><object type="image/svg+xml" data={menuImportIcon} /></span>
                        <span><object type="image/svg+xml" data={menuExportIcon} /></span>
                        <span onClick={this.cleanStorage}><object type="image/svg+xml" data={menuDeleteIcon} /></span>
                    </div>
                    <div>
                    <span><object type="image/svg+xml" data={menuHelpIcon} /></span>
                    <span><object type="image/svg+xml" data={menuMailIcon} /></span>
                    </div>
                    {/* <Help /> */}
                </aside>
                <main>
                     {/* <DayPicker
                        firstDayOfWeek={1}
                        selectedDays={selectedDays}
                        showWeekNumbers
                        // showOutsideDays
                        // modifiers={modifiers}
                        // onDayClick={this.handleDayChange}
                        // onDayMouseEnter={this.handleDayEnter}
                        // onDayMouseLeave={this.handleDayLeave}
                        // onWeekClick={this.handleWeekClick}
                    /> */}
                    <table>
                        <tbody>
                            <tr>
                                {SHORT_WEEK_DAY.map((item) => 
                                    <th key={item}>
                                        <p>{moment(selectedDays[SHORT_WEEK_DAY.indexOf(item)]).format('DD')}</p>
                                        <p>{item}</p>
                                    </th>
                                )}
                                <th className="task-text">Tasks</th>
                            </tr>
                            {taskData.map((item) => (
                                <Task taskData={item} key={item.id}/>
                            ))}
                        </tbody>
                    </table>
                    <button className="add-btn" onClick={this.addNewTask}>+</button>
                </main>
            </div>
        </div>)
    }
}
export default Calendar