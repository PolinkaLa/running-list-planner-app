import React, { Component } from 'react';
import newStatus from './img/new.svg';
import progressStatus from './img/progress.svg';
import doneStatus from './img/done.svg';
import cancelStatus from './img/cancel.svg';
import prevStatus from './img/prev.svg';
import nextStatus from './img/next.svg';

class Help extends Component {
    constructor(props) {
        super();
    }
    state = {
        show: false
    }
    render () {
        return <div className="help">
        <p className="title">Help</p>
        <div className="item">
            <img src={newStatus}/>
            <p>new</p>
        </div>
        <div className="item">
            <img src={progressStatus}/>
            <p>progress</p>
        </div>
        <div className="item">
            <img src={doneStatus}/>
            <p>done</p>
        </div>
        <div className="item">
            <img src={cancelStatus}/>
            <p>cancel</p>
        </div>
        <div className="item">
            <img src={prevStatus}/>
            <p>prev</p>
        </div>
        <div className="item">
            <img src={nextStatus}/>
            <p>next</p>
        </div>
    </div>
    }
}

export default Help