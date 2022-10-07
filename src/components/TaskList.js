/* eslint-disable jsx-a11y/alt-text */
import React, { Fragment, useEffect , useState} from 'react';
import Task from '../components/Task';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import { SHORT_WEEK_DAY } from '../components/Constants';
import { useSelector, useDispatch } from 'react-redux'
import { addTask } from './taskListSlicer'

export default function TaskList () {

    const [selectedDays, setSelectedDays] = useState([]);
    const taskData = useSelector((state) => state.taskList.taskData);
    const dispatch = useDispatch();

    const getWeekRange = date => {
        return {
            from: moment(date)
                .startOf('isoweek')
                .toDate(),
            to: moment(date)
                .endOf('isoweek')
                .toDate(),
        };
    };
    
    const getWeekDays = weekStart => {
        const days = [weekStart];
        for (let i = 1; i < 7; i += 1) {
            days.push(
                moment(weekStart)
                    .add(i, 'days')
                    .toDate()
            );
        }
        return days;
    }

    useEffect(() => {
        const handleDayChange = date => {
            setSelectedDays(getWeekDays(getWeekRange(date).from));
        };
        handleDayChange(new Date());
        console.log('useeffect')
    }, [])
            
    if (!localStorage.plannerApp) {
        localStorage.plannerApp="[]";
    }
    return (
        <Fragment>
            <table>
                <tbody>
                    <tr>
                        {SHORT_WEEK_DAY.map((item) => 
                            <th key={item}>
                                <p>{moment(selectedDays[SHORT_WEEK_DAY.indexOf(item)]).format('DD')}</p>
                                <p>{item}</p>
                            </th>
                        )}
                        <th className="task-text">Tasks</th>
                    </tr>
                    {taskData.map((item) => (
                        <Task taskData={item} key={item.id}/>
                    ))}
                </tbody>
            </table>
            <button className="add-btn" onClick={() => dispatch(addTask())}>+</button>
        </Fragment>
    )
}