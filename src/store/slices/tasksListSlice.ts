import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'


export type ToDoObjectType = {
  value: string
  isCompleted: boolean
}

export  type  ItemsDisplayType = 'All' | 'Active' | 'Completed'

type InitialStateType = {
  todos: Array<ToDoObjectType>
  itemsDisplay: ItemsDisplayType
}


const initialState: InitialStateType = {
  todos: [],
  itemsDisplay: 'All',
}

export const tasksListSlice = createSlice({
  name: 'taskList',
  initialState,
  reducers: {
    addTask: (state, actions: PayloadAction<ToDoObjectType>) => {
      if (!state.todos.some(i => i.value === actions.payload.value)) {
        state.todos.push(actions.payload)
      }
    },
    deleteCompletedTasks: (state) => {
      state.todos = state.todos.filter(i => !i.isCompleted)
    },
    isCompletedChange: (state, actions: PayloadAction<string>) => {
      const item = state.todos.find(i => i.value === actions.payload)
      if (!item) return
      item.isCompleted = !item.isCompleted
    },
    setItemsDisplay: (state, action: PayloadAction<ItemsDisplayType>) => {
      state.itemsDisplay = action.payload
    },
  },
})

export const { addTask, deleteCompletedTasks, isCompletedChange, setItemsDisplay } = tasksListSlice.actions

export const selectTaskList = (state: RootState) => state.taskList.todos
export const selectItemsDisplay = (state: RootState) => state.taskList.itemsDisplay


export default tasksListSlice.reducer
