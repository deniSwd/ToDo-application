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
      if(!state.todos.some(i => i.value === actions.payload.value)){
        state.todos.push(actions.payload)
      }
    },
    deleteCompletedTasks: (state) => {
      state.todos = state.todos.filter(i => !i.isCompleted)
    },
    isCompletedChange: (state, actions: PayloadAction<string>) => {
      let itemIndex = state.todos.findIndex(i => i.value === actions.payload)
      state.todos[itemIndex].isCompleted = !state.todos[itemIndex].isCompleted
    }
  }
});

export const { addTask, deleteCompletedTasks, isCompletedChange } = taskListSlice.actions;

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
