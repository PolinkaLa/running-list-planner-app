import { configureStore } from '@reduxjs/toolkit';
import taskListSlicer from './components/taskListSlicer';

export default configureStore({
  reducer: {
    taskList: taskListSlicer
  }
})