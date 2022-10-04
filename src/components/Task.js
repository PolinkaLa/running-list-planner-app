/* eslint-disable no-loop-func */
import React, { Component} from 'react';
import { SHORT_WEEK_DAY, TASK_STATUS } from '../components/Constants';

class Task extends Component {
    constructor(props) {
        super();
        this.state = {
            taskText: props.taskData.taskText,
        }
    }

    changeStatus = event => {
        const taskID = this.props.taskData.id;
        const newStatus = event.target.value;
        const changedDay = event.target.parentElement.className;
        let storage = JSON.parse(localStorage.plannerApp);
        const index = storage.findIndex(item => item.id === taskID);
        storage[index][changedDay]=newStatus;
        localStorage.plannerApp = JSON.stringify(storage);
        const oldStatus = event.target.classList[0];
        event.target.classList.remove(oldStatus);
        event.target.classList.add("status-" + newStatus);
    }

    changeTaskText = event => {
        this.setState({
            taskText: event.target.value
        })
        const taskID = this.props.taskData.id;
        let storage = JSON.parse(localStorage.plannerApp);
        const index = storage.findIndex(item => item.id === taskID);
        storage[index].taskText = event.target.value
        localStorage.plannerApp = JSON.stringify(storage);
    }

    render() {
        const arr = [];
        let day = "";
        for(let i = 0; i < 7; i++) {
            switch (i) {
                case 0:
                    day = SHORT_WEEK_DAY[0]
                    break
                case 1:
                    day = SHORT_WEEK_DAY[1]
                    break
                case 2:
                    day = SHORT_WEEK_DAY[2]
                    break
                case 3:
                    day = SHORT_WEEK_DAY[3]
                    break
                case 4:
                    day = SHORT_WEEK_DAY[4]
                    break
                case 5:
                    day = SHORT_WEEK_DAY[5]
                    break
                case 6:
                    day = SHORT_WEEK_DAY[6]
                    break
                default:
                    day = "";
            }
            arr.push( <td key={i} className={day}>
                    <select onChange={this.changeStatus} className={"status-"+this.props.taskData[day]}>
                        {
                            TASK_STATUS.map((item) => (
                                <option key={i+item.value} defaultValue={this.props.taskData[day]===item.value} value={item.value}>{item.label}</option>
                            ))
                        }
                    </select>
            </td>)
        }
        arr.push(<td key='task-text' className="task-text"><input type="text" value={this.state.taskText} onChange={this.changeTaskText}/></td>)
        return <tr>
            {arr}
        </tr>
    }
}

export default Task
