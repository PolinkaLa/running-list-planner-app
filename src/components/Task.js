/* eslint-disable no-loop-func */
import React from 'react';
import { SHORT_WEEK_DAY, TASK_STATUS } from '../components/Constants';
import { useSelector,useDispatch } from 'react-redux'
import { changeStatus, changeText } from './taskListSlicer'

function Task(props) {
    const storage = useSelector((state) => state.taskList.taskData);
    const dispatch = useDispatch();

    const updateStatus = (event, newStatus) => {
        const oldStatus = event.target.classList[0];
        event.target.classList.remove(oldStatus);
        event.target.classList.add("status-" + newStatus);
    }
    const getIndex = (id) => storage.findIndex(item => item.id === id)

    const getNewTaskStatus = event => {
        const newStatus = event.target.value;
        const changedDay = event.target.parentElement.className;
        const index = getIndex(props.taskData.id);
        updateStatus(event, newStatus);
        return {
            index,
            changedDay,
            newStatus
        }
    }

    const getNewTaskText = event => {
        const index = getIndex(props.taskData.id);
        return {
            index,
            newText: event.target.value
        }
    }
        
    const arr = [];
    let day = "";
    for(let i = 0; i < 7; i++) {
        switch (i) {
            case 0:
                day = SHORT_WEEK_DAY[0]
                break
            case 1:
                day = SHORT_WEEK_DAY[1]
                break
            case 2:
                day = SHORT_WEEK_DAY[2]
                break
            case 3:
                day = SHORT_WEEK_DAY[3]
                break
            case 4:
                day = SHORT_WEEK_DAY[4]
                break
            case 5:
                day = SHORT_WEEK_DAY[5]
                break
            case 6:
                day = SHORT_WEEK_DAY[6]
                break
            default:
                day = "";
        }
        arr.push( <td key={i} className={day}>
                <select onChange={(e) => {
                        const newTaskStatus = getNewTaskStatus(e)
                        dispatch(changeStatus(JSON.stringify(newTaskStatus)))
                    }} 
                    className={"status-"+props.taskData[day]}>
                    {
                        TASK_STATUS.map((item) => (
                            <option key={i+item.value} defaultValue={props.taskData[day]===item.value} value={item.value}>{item.label}</option>
                        ))
                    }
                </select>
        </td>)
    }
    arr.push(<td key='task-text' className="task-text"><input type="text" value={props.taskData.taskText} onChange={(e) => {
        const newText = getNewTaskText(e)
        dispatch(changeText(JSON.stringify(newText)))}}/></td>)
    return <tr>
        {arr}
    </tr>

}
export default Task
