import React, {FC} from "react";
import s from '../footer/footer.module.scss'
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {deleteCompletedTasks, selectTaskList, setItemsDisplay} from "../../store/slices/tasksListSlice";

export const Footer: FC = () => {
  const tasks = useAppSelector(selectTaskList)
  const dispatch = useAppDispatch()
  const itemsLeftLength = tasks.filter(i => !i.isCompleted).length

  return (
    <div className={s.footerContent}>
      <div className={s.itemsLeft}>
        {itemsLeftLength} Items left
      </div>
      <div className={s.taskFilter}>
        <div className={s.filterButton}
             onClick={() => dispatch(setItemsDisplay('All'))}>All</div>
        <div className={s.filterButton}
             onClick={() => dispatch(setItemsDisplay('Active'))}>Active</div>
        <div className={s.filterButton}
             onClick={() => dispatch(setItemsDisplay('Completed'))}>Completed</div>
      </div>
      <div className={s.clearCompleted}
           onClick={() => dispatch(deleteCompletedTasks())}>
        Clear completed
      </div>
    </div>
  )
}