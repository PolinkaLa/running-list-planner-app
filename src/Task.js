import React, { Component} from 'react';
import StatusMenu from './StatusMenu'

class Task extends Component {
    constructor() {
        super();
        this.state = {}
    }

    changeStatus = event => {
        console.log("update and save this task")
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
            arr.push( <td key={i}>
                <div className="menu">
                    <select onChange={this.changeStatus}>
                        <option selected={this.props.taskData[day]==="empty"}value="empty"></option>
                        <option selected={this.props.taskData[day]==="new"} value="new">new</option>
                        <option selected={this.props.taskData[day]==="progress"} value="progress">in progress</option>
                        <option selected={this.props.taskData[day]==="done"} value="done">done</option>
                        <option selected={this.props.taskData[day]==="cancel"} value="cancel">cancel</option>
                        <option selected={this.props.taskData[day]==="next"} value="next" className="status-next">next</option>
                        <option selected={this.props.taskData[day]==="prev"} value="prev">prev</option>
                    </select>
                </div>

                {/* <StatusMenu onClick={this.changeStatus}/> */}
            </td>)
        }
        arr.push(<td className="task-text"><input type="text" value={this.props.taskData.taskText} onChange={this.changeTaskText}/></td>)
        return <tr>
            {arr}
    </tr>
    }
}

export default Task
