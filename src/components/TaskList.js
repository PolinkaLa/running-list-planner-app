/* eslint-disable jsx-a11y/alt-text */
import React, { Component, Fragment } from 'react';
import Task from '../components/Task';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import { SHORT_WEEK_DAY } from '../components/Constants';

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

export default class TaskList extends Component {
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
        const { selectedDays, taskData} = this.state;
        
        return (
            <Fragment>
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
            </Fragment>
        )
    }      
}