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
      <div>{itemsLeftLength}Items left</div>
      <div className={s.taskType}>
        <div onClick={() => dispatch(setItemsDisplay('All'))}>All</div>
        <div onClick={() => dispatch(setItemsDisplay('Active'))}>Active</div>
        <div onClick={() => dispatch(setItemsDisplay('Completed'))}>Completed</div>
      </div>
      <div onClick={() => dispatch(deleteCompletedTasks())}>Clear completed</div>
    </div>
  )
}