import React, { Component} from 'react';

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
        console.log(this.state.taskText)
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
                    <select onChange={this.changeStatus} className={"status-"+this.props.taskData[day]}>
                        <option selected={this.props.taskData[day]==="empty"} value="empty"></option>
                        <option selected={this.props.taskData[day]==="new"} value="new">new</option>
                        <option selected={this.props.taskData[day]==="progress"} value="progress">progress</option>
                        <option selected={this.props.taskData[day]==="done"} value="done">done</option>
                        <option selected={this.props.taskData[day]==="cancel"} value="cancel">cancel</option>
                        <option selected={this.props.taskData[day]==="next"} value="next">next</option>
                        <option selected={this.props.taskData[day]==="prev"} value="prev">prev</option>
                    </select>
            </td>)
        }
        arr.push(<td className="task-text"><input type="text" value={this.state.taskText} onChange={this.changeTaskText}/></td>)
        return <tr>
            {arr}
        </tr>
    }
}

export default Task
