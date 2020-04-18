import React, { Component} from 'react';

class Task extends Component {
    constructor() {
        super();
        this.state = {}
    }

    changeStatus = event => {
        const taskID = this.props.taskData.id;
        const newStatus = event.target.value;
        const changedDay = event.target.parentElement.className;
        let storage = JSON.parse(localStorage.plannerApp);
        const index = storage.findIndex(item => item.id === taskID);
        storage[index][changedDay]=newStatus;
        localStorage.plannerApp = JSON.stringify(storage);
    }

    changeTaskText = event => {
        console.log("change task description")
    }

    render() {
        const arr = [];
        let day = "";
        for(let i = 0; i < 7; i++) {
            switch (i) {
                case 0:
                    day = "mo"
                    break
                case 1:
                    day = "tu"
                    break
                case 2:
                    day = "we"
                    break
                case 3:
                    day = "th"
                    break
                case 4:
                    day = "fr"
                    break
                case 5:
                    day = "sa"
                    break
                case 6:
                    day = "su"
                    break
                default:
                    day = "";
            }
            arr.push( <td key={i} className={day}>
                    <select onChange={this.changeStatus}>
                        <option selected={this.props.taskData[day]==="empty"}value="empty"></option>
                        <option selected={this.props.taskData[day]==="new"} value="new">new</option>
                        <option selected={this.props.taskData[day]==="progress"} value="progress">in progress</option>
                        <option selected={this.props.taskData[day]==="done"} value="done">done</option>
                        <option selected={this.props.taskData[day]==="cancel"} value="cancel">cancel</option>
                        <option selected={this.props.taskData[day]==="next"} value="next" className="status-next">next</option>
                        <option selected={this.props.taskData[day]==="prev"} value="prev">prev</option>
                    </select>
            </td>)
        }
        arr.push(<td className="task-text"><input type="text" value={this.props.taskData.taskText} onChange={this.changeTaskText}/></td>)
        return <tr>
            {arr}
        </tr>
    }
}

export default Task
