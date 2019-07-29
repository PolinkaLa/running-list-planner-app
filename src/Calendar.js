import React, { Component } from 'react';
import Task from './Task'

class Calendar extends Component {
    constructor() {
        super();
        this.currentWeekNumber = ''
        this.currentWeekDays = []
    }

    componentWillMount() {
        this.getCurrentWeekNumber();
        this.getCurrentWeekDays();
    }

    getCurrentWeekNumber(weekNo) {
        const target = new Date();
        const day = (target.getDay() + 6) % 7;
        target.setDate(target.getDate() - day + 3);
        const jan4 = new Date(target.getFullYear(), 0, 4);
        const dayDiff = (target - jan4) / 86400000;
        const week = 1 + Math.ceil(dayDiff / 7);
        this.currentWeekNumber = `${target.getFullYear()}-W${week}`;
    }

    getCurrentWeekDays(weekNumber) {
        let curr = new Date() 
        let week = []

        for (let i = 1; i <= 7; i++) {
            let first = curr.getDate() - curr.getDay() + i;
            let day = new Date(curr.setDate(first));
            week.push(day)
        }
        this.currentWeekDays = week;
    }

    render() {
        return <div>
            <input type='week' id='week' defaultValue={this.currentWeekNumber}/>
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
                    {console.log(this.currentWeekDays)}
                    {this.currentWeekDays.map((item) => (<th>{item.getDate()}</th>))}
                    <th>Tasks</th>
                </tr>
                    <Task/>
                    <Task/>
                </tbody>
            </table>
        </div>
    }
}
export default Calendar