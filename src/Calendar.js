import React, { Component } from 'react';
import Task from './Task';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';

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
        const { hoverRange, selectedDays, taskData} = this.state;

        const daysAreSelected = selectedDays.length > 0;

        const modifiers = {
            hoverRange,
            selectedRange: daysAreSelected && {
                from: selectedDays[0],
                to: selectedDays[6],
            },
            hoverRangeStart: hoverRange && hoverRange.from,
            hoverRangeEnd: hoverRange && hoverRange.to,
            selectedRangeStart: daysAreSelected && selectedDays[0],
            selectedRangeEnd: daysAreSelected && selectedDays[6],
        };
        return <div className="container">
            {/* <DayPicker
                firstDayOfWeek={1}
                selectedDays={selectedDays}
                showWeekNumbers
                showOutsideDays
                modifiers={modifiers}
                onDayClick={this.handleDayChange}
                onDayMouseEnter={this.handleDayEnter}
                onDayMouseLeave={this.handleDayLeave}
                onWeekClick={this.handleWeekClick}
            /> */}
            <table>
                <tbody>
                <tr>
                    {selectedDays.length === 7 &&
                        selectedDays.map((item) => 
                        (<th className="tbl-date-head" key={item}>{moment(item).format('DD')}</th>))
                    }
                </tr>
                <tr>
                    <th>Mo</th>
                    <th>Tu</th>
                    <th>We</th>
                    <th>Th</th>
                    <th>Fr</th>
                    <th>Sa</th>
                    <th>Su</th>
                    <th className="task-text">Tasks</th>
                </tr>

                {taskData.map((item) => (
                    <Task taskData={item} key={item.id}/>
                ))} 
                </tbody>
            </table>
            <button onClick={this.addNewTask}>Add task</button>
        </div>
    }
}
export default Calendar