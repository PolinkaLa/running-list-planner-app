import React, { Component } from 'react';
import Task from './Task';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import Help from './Help';
import avatar from './img/avatar.png';
// import Modal from '.Modal';

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
                        <span><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.3389 16.1611C19.9774 14.7997 18.3569 13.7918 16.5888 13.1817C18.4825 11.8775 19.7266 9.69473 19.7266 7.22656C19.7266 3.24185 16.4847 0 12.5 0C8.51528 0 5.27344 3.24185 5.27344 7.22656C5.27344 9.69473 6.51753 11.8775 8.41123 13.1817C6.64316 13.7918 5.02266 14.7997 3.66118 16.1611C1.30024 18.5221 0 21.6611 0 25H1.95312C1.95312 19.1844 6.68442 14.4531 12.5 14.4531C18.3156 14.4531 23.0469 19.1844 23.0469 25H25C25 21.6611 23.6998 18.5221 21.3389 16.1611ZM12.5 12.5C9.59224 12.5 7.22656 10.1344 7.22656 7.22656C7.22656 4.31875 9.59224 1.95312 12.5 1.95312C15.4078 1.95312 17.7734 4.31875 17.7734 7.22656C17.7734 10.1344 15.4078 12.5 12.5 12.5Z" fill="white" fill-opacity="0.7"/>
</svg></span>
                        <span><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.0703 0H2.92969C1.31426 0 0 1.31426 0 2.92969V6.83594H1.95312V2.92969C1.95312 2.39121 2.39121 1.95312 2.92969 1.95312H22.0703C22.6088 1.95312 23.0469 2.39121 23.0469 2.92969V22.0703C23.0469 22.6088 22.6088 23.0469 22.0703 23.0469H2.92969C2.39121 23.0469 1.95312 22.6088 1.95312 22.0703V18.1641H0V22.0703C0 23.6857 1.31426 25 2.92969 25H22.0703C23.6857 25 25 23.6857 25 22.0703V2.92969C25 1.31426 23.6857 0 22.0703 0Z" fill="white" fill-opacity="0.7"/>
<path d="M11.7188 6.4314L10.3377 7.81245L14.0486 11.5234H0V13.4765H14.0486L10.3377 17.1875L11.7188 18.5685L17.7873 12.5L11.7188 6.4314Z" fill="white" fill-opacity="0.7"/>
</svg></span>
                        <span><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.0469 15.2832V22.0703C23.0469 22.6088 22.6088 23.0469 22.0703 23.0469H2.92969C2.39121 23.0469 1.95312 22.6088 1.95312 22.0703V15.2832H0V22.0703C0 23.6857 1.31426 25 2.92969 25H22.0703C23.6857 25 25 23.6857 25 22.0703V15.2832H23.0469Z" fill="white" fill-opacity="0.7"/>
<path d="M17.1877 11.5096L13.4768 15.2205V0H11.5236V15.2205L7.8127 11.5096L6.43164 12.8906L12.5002 18.9592L18.5688 12.8906L17.1877 11.5096Z" fill="white" fill-opacity="0.7"/>
</svg>
</span>
                        <span onClick={this.cleanStorage}><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M13.1258 13.3512H11.1768V21.0988H13.1258V13.3512Z" fill="white" fill-opacity="0.7"/>
<path d="M17.0238 13.3512H15.0747V21.0988H17.0238V13.3512Z" fill="white" fill-opacity="0.7"/>
<path d="M9.22788 13.3512H7.27881V21.0988H9.22788V13.3512Z" fill="white" fill-opacity="0.7"/>
<path d="M20.7497 5.44719L17.9035 4.84553L18.0328 4.23371C18.1944 3.46965 18.0487 2.68849 17.6226 2.034C17.1965 1.37956 16.5411 0.93019 15.7771 0.768666L12.4399 0.0632938C10.8628 -0.270105 9.30827 0.741811 8.97482 2.31906L8.84557 2.93068L5.89913 2.30778C5.13589 2.14645 4.35542 2.29201 3.70166 2.71764C3.04785 3.14328 2.59893 3.79807 2.43765 4.56135L1.93359 6.94602L13.8062 9.45584H3.57583V22.0761C3.57583 23.6882 4.88736 24.9998 6.49947 24.9998H17.8041C19.4162 24.9998 20.7278 23.6882 20.7278 22.0761V10.9191L22.4992 11.2935L23.0032 8.90862C23.3361 7.33308 22.3253 5.78025 20.7497 5.44719ZM10.8818 2.72214C10.9929 2.19635 11.5111 1.8591 12.0368 1.97023L15.374 2.6756C15.6287 2.72946 15.8471 2.87922 15.9892 3.09738C16.1312 3.31555 16.1798 3.57595 16.1259 3.83064L15.9966 4.4424L10.7525 3.33386L10.8818 2.72214ZM18.7786 22.0762C18.7786 22.6135 18.3415 23.0507 17.8041 23.0507H6.49942C5.96207 23.0507 5.52491 22.6135 5.52491 22.0762V11.405H18.7786V22.0762V22.0762ZM21.0961 8.5056L20.9951 8.98353L4.24356 5.44221L4.34458 4.96433C4.39825 4.71047 4.54756 4.4926 4.76504 4.35105C4.98257 4.2094 5.24219 4.16106 5.49605 4.21472L20.3466 7.35403C20.8707 7.46492 21.2069 7.98143 21.0961 8.5056Z" fill="white" fill-opacity="0.7"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="25" height="25" fill="white"/>
</clipPath>
</defs>
</svg></span>
                    </div>
                    <div>
                    <span><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M20.1202 6.79763C19.7312 3.27496 16.8921 0.435885 13.3695 0.0468759C11.1888 -0.193942 9.00796 0.500826 7.3863 1.95325C5.76337 3.40675 4.83252 5.48929 4.83252 7.66666V8.64326H6.78572V7.66666C6.78572 6.04392 7.47961 4.49175 8.68941 3.40821C9.91566 2.30994 11.5014 1.80569 13.1551 1.98831C15.7765 2.27781 17.8894 4.39062 18.1789 7.01208C18.4117 9.1203 17.4786 11.1743 15.7437 12.3727C13.1014 14.1978 11.5239 17.1658 11.5239 20.3121V21.2887H13.477V20.3121C13.477 17.8074 14.7393 15.4402 16.8537 13.9798C19.1804 12.3727 20.432 9.62069 20.1202 6.79763Z" fill="white" fill-opacity="0.7"/>
<path d="M13.4776 23.0468H11.5244V25H13.4776V23.0468Z" fill="white" fill-opacity="0.7"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="25" height="25" fill="white"/>
</clipPath>
</defs>
</svg>
</span>
                    <span><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.0703 3.32031H2.92969C1.31426 3.32031 0 4.63457 0 6.25V18.75C0 20.3654 1.31426 21.6797 2.92969 21.6797H22.0703C23.6857 21.6797 25 20.3654 25 18.75V6.25C25 4.63457 23.6857 3.32031 22.0703 3.32031ZM23.0469 18.75C23.0469 19.2885 22.6088 19.7266 22.0703 19.7266H2.92969C2.39121 19.7266 1.95312 19.2885 1.95312 18.75V6.25C1.95312 5.71152 2.39121 5.27344 2.92969 5.27344H22.0703C22.6088 5.27344 23.0469 5.71152 23.0469 6.25V18.75Z" fill="white" fill-opacity="0.7"/>
<path d="M22.881 4.5379L12.4999 12.2594L2.11885 4.5379L0.953125 6.10504L12.4999 14.6936L24.0467 6.10504L22.881 4.5379Z" fill="white" fill-opacity="0.7"/>
</svg>
</span>
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
                            {/* <tr>
                            {selectedDays.length === 7 &&
                                selectedDays.map((item) => 
                                (<th className="tbl-date-head" key={item}>{moment(item).format('DD')}</th>))
                            }
                        </tr> */}
                        <tr>
                            <th><p>{moment(selectedDays[0]).format('DD')}</p><p>Mo</p></th>
                            <th><p>{moment(selectedDays[1]).format('DD')}</p><p>Tu</p></th>
                            <th><p>{moment(selectedDays[2]).format('DD')}</p><p>We</p></th>
                            <th><p>{moment(selectedDays[3]).format('DD')}</p><p>Th</p></th>
                            <th><p>{moment(selectedDays[4]).format('DD')}</p><p>Fr</p></th>
                            <th><p>{moment(selectedDays[5]).format('DD')}</p><p>Sa</p></th>
                            <th><p>{moment(selectedDays[6]).format('DD')}</p><p>Su</p></th>
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