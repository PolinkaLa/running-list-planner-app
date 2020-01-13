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
        const arr = []
        for(let i = 0; i < 7; i++) {
            arr.push( <td key={i}>
                <div className="menu">
                    <select onChange={this.changeStatus}>
                        <option value="empty"></option>
                        <option selected={false} value="new">new</option>
                        <option value="progress">in progress</option>
                        <option value="done">done</option>
                        <option value="cancel">cancel</option>
                        <option value="next">next</option>
                        <option value="prev">prev</option>
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
