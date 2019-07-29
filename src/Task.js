import React, { Component} from 'react'

class Task extends Component {
    constructor() {
        super();
        this.state = {
            isShowStatus: true,
            isShowSelecr: false
        }
    }
    
    handleClick = event => {
        console.log(event.target)
        this.setState({
            isShowStatus: this.state.isShowStatus ? false : true,
            isShowSelecr: this.state.isShowSelecr ? false : true}) 
    }

    render() {
        return <tr>
        <td><div className='status'></div></td>
        <td>
            {this.state.isShowStatus && <div className='status status-new' onClick={this.handleClick}></div>}
            {this.state.isShowSelecr && <input type='text' onClick={this.handleClick}/>}
        </td>
        <td><div className='status status-in-progress'></div></td>
        <td><div className='status status-done'></div></td>
        <td><div className='status status-cancel'></div></td>
        <td><div className='status status-next'></div></td>
        <td><div className='status status-previous'></div></td>
        <td><div>this is a new task in my planner</div></td>
    </tr>
    }
}

export default Task
