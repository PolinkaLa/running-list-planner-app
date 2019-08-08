import React, { Component } from 'react';
import Task from './Task';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import StatusMenu from './StatusMenu'

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
        selectedDays: []
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
        console.log(this.state.hoverRange)
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

    addNewTask = e => {
        console.log("add new task")
    }

    componentWillMount() {
        this.handleDayChange(new Date())
    }

    render() {
        const { hoverRange, selectedDays} = this.state;

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
        return <div>
            <DayPicker
                firstDayOfWeek={1}
                selectedDays={selectedDays}
                showWeekNumbers
                showOutsideDays
                modifiers={modifiers}
                onDayClick={this.handleDayChange}
                onDayMouseEnter={this.handleDayEnter}
                onDayMouseLeave={this.handleDayLeave}
                onWeekClick={this.handleWeekClick}
            />
            <table>
                <tbody>
                <tr>
                    {selectedDays.length === 7 &&
                        selectedDays.map((item) => 
                        (<th className="tbl-date-head">{moment(item).format('DD')}</th>))
                    }
                    <th></th>
                    </tr>
                    <tr>
                        <th>Wo</th>
                        <th>Tu</th>
                        <th>We</th>
                        <th>Th</th>
                        <th>Fr</th>
                        <th>Sa</th>
                        <th>Su</th>
                        <th className="task-text">Tasks</th>
                    </tr>
                    
                    <Task key="1"/>
                </tbody>
            </table>
            <StatusMenu/>
        </div>
    }
}
export default Calendar