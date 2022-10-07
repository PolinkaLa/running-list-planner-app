import { createSlice } from '@reduxjs/toolkit'

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
                    "id": JSON.parse(localStorage.plannerApp).length+1,
                    "mo": null,
                    "tu": null,
                    "we": null,
                    "th": null,
                    "fr": null,
                    "sa": null,
                    "su": null,
                    "taskText": ""
                }]
            localStorage.plannerApp = JSON.stringify(state.taskData)
        }
    },
})

export const { reset, addTask } = taskListSlice.actions

export default taskListSlice.reducer