import React, { Component} from 'react';
import StatusMenu from './StatusMenu'

class Task extends Component {
    constructor() {
        super();
        this.state = {
            isShowStatus: true,
            isShowSelect: true
        }
    }
    
    handleClick = event => {
        console.log(event.getScreenX(), event.getScreenY())
        this.setState({
            isShowStatus: this.state.isShowStatus ? false : true,
            isShowSelecr: this.state.isShowSelect ? false : true}) 
    }

    changeStatus = event => {
        this.handleClick(event)
    }

    render() {
        const arr = []
        for(let i = 0; i < 7; i++) {
            arr.push( <td key={i}>
                {/* {this.state.isShowStatus && <select className='status' onClick={this.handleClick}></select>} */}
                {this.state.isShowSelect && <StatusMenu onClick={this.changeStatus}/>}
            </td>)
        }
        arr.push(<td className="task-text"><input type="text" value={this.props.taskData.taskText}/></td>)
        return <tr>
            {arr}
    </tr>
    }
}

export default Task
