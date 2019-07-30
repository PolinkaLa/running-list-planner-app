import React, { Component} from 'react';
import StatusMenu from './StatusMenu'

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

    changeStatus = event => {


        this.handleClick(event)
    }

    render() {
        const arr = []
        for(let i = 0; i < 7; i++) {
            arr.push( <td key={i}>
                {this.state.isShowStatus && <div className='status' onClick={this.handleClick}></div>}
                {this.state.isShowSelecr && <StatusMenu onClick={this.changeStatus}/>}
            </td>)
        }
        return <tr>
            {arr}
        {/* <td><div className='status'></div></td>
        <td>
            {this.state.isShowStatus && <div className='status' onClick={this.handleClick}></div>}
            {this.state.isShowSelecr && <input type='text' onClick={this.changeStatus}/>}
        </td>
        <td><div className='status'></div></td>
        <td><div className='status'></div></td>
        <td><div className='status'></div></td>
        <td><div className='status'></div></td>
        <td><div className='status'></div></td>
        <td><div>this is a new task in my planner</div></td> */}
    </tr>
    }
}

export default Task
