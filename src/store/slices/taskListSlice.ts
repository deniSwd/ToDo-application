import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';


export type ToDoObjectType = {
  value: string
  isCompleted: boolean
}
export type InitialStateType = {
  todos: Array<ToDoObjectType>
}

const initialState: InitialStateType = {
  todos: []
}

export const taskListSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    addTask: (state, actions: PayloadAction<ToDoObjectType>) => {
      state.todos.push(actions.payload);
    },
    deleteCompletedTasks: (state) => {
      state.todos = state.todos.filter(i => !i.isCompleted);
    }
  }
});

export const { addTask, deleteCompletedTasks } = taskListSlice.actions;

export const selectTaskList = (state: RootState) => state.taskList.todos

/*export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };*/

export default taskListSlice.reducer;
