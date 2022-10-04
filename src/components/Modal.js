import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super();
        this.state = {
            show: props.show,
        }
    }
    render () {
        return ({ this.state.show &&
            <div className="shadow">
                <div className="modal">
                    <p>modal</p>
                </div>
            </div>
          })
    }
}

export default Modal