import { createSlice } from '@reduxjs/toolkit'

const refreshLocalStorage = (data) => {
    localStorage.plannerApp = JSON.stringify(data)
}

export const taskListSlice = createSlice({
    name: 'taskList',
    initialState: {
        taskData: JSON.parse(localStorage.plannerApp),
    },
    reducers: {
        reset: (state) => {
            state.taskData = [];
            localStorage.plannerApp = "[]"
        },
        addTask: (state) => {
            state.taskData = [...state.taskData,
                {
                    "id": state.taskData.length+1,
                    "Mo": null,
                    "Tu": null,
                    "We": null,
                    "Th": null,
                    "Fr": null,
                    "Sa": null,
                    "Su": null,
                    "taskText": ""
                }];
                refreshLocalStorage(state.taskData);
        },
        changeStatus: (state, data) => {
            const taskStatus = JSON.parse(data.payload);
            state.taskData[taskStatus.index][taskStatus.changedDay] = taskStatus.newStatus;
            refreshLocalStorage(state.taskData);
        },
        changeText: (state, data) => {
            const taskText = JSON.parse(data.payload);
            state.taskData[taskText.index].taskText = taskText.newText;
            refreshLocalStorage(state.taskData);
        } 
    },
})

export const { reset, addTask, changeStatus, changeText } = taskListSlice.actions

export default taskListSlice.reducer