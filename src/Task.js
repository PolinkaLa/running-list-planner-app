import React, { Component} from 'react';
import StatusMenu from './StatusMenu'

class Task extends Component {
    constructor() {
        super();
        this.state = {
            isShowStatus: true,
            isShowSelect: false
        }
    }
    
    handleClick = event => {
        console.log(event.getScreenX(), event.getScreenY())
        // this.setState({
        //     isShowStatus: this.state.isShowStatus ? false : true,
        //     isShowSelecr: this.state.isShowSelect ? false : true}) 
    }

    changeStatus = event => {
        this.handleClick(event)
    }

    render() {
        const arr = []
        for(let i = 0; i < 7; i++) {
            arr.push( <td key={i}>
                {this.state.isShowStatus && <div className='status' onClick={this.handleClick}></div>}
                {/* {this.state.isShowSelect && <StatusMenu onClick={this.changeStatus}/>} */}
            </td>)
        }
        arr.push(<td className="task-text">lorem ipsum dolor sit amin</td>)
        return <tr>
            {arr}
    </tr>
    }
}

export default Task
