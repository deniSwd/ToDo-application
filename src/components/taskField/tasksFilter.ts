import {ItemsDisplayType, ToDoObjectType} from "../../store/slices/tasksListSlice";

const tasksFilter = (itemsDisplay: ItemsDisplayType, tasks: Array<ToDoObjectType>) => {
  let currentItems: Array<ToDoObjectType>
  switch (itemsDisplay) {
    case 'All':
      return currentItems = tasks
    case 'Active':
      currentItems = tasks.filter(i => !i.isCompleted)
      return currentItems
    case 'Completed':
      currentItems = tasks.filter(i => i.isCompleted)
      return currentItems
    default:
      return tasks
  }
}

export default tasksFilter