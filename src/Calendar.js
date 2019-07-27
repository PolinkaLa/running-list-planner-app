import React, { Component } from 'react';

class Calendar extends Component {
    constructor() {
        super();
        this.currentWeek = ''
    }

    getCurrentWeek() {
        const target = new Date();
        const day = (target.getDay() + 6) % 7;
        target.setDate(target.getDate() - day + 3);
        const jan4 = new Date(target.getFullYear(), 0, 4);
        const dayDiff = (target - jan4) / 86400000;
        const week = 1 + Math.ceil(dayDiff / 7);
        this.currentWeek = `${target.getFullYear()}-W${week}`;
    }

    render() {
        this.getCurrentWeek();
        return <div>
            <input type='week' id='week' defaultValue={this.currentWeek}/>
        </div>
    }
}
export default Calendar