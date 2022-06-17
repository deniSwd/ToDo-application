import React, {FC} from 'react';
import s from './taskField.module.scss'
import {isCompletedChange, selectItemsDisplay, selectTaskList} from "../../store/slices/tasksListSlice";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import tasksFilter from "./tasksFilter";
import checkmark from '../../assets/checkmark.png'

export const TaskField: FC = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTaskList);
  const itemsDisplay = useAppSelector(selectItemsDisplay)

  return (
    <div className={s.taskField}>
      {tasksFilter(itemsDisplay, tasks).map((t, i) =>
        <div key={i} className={s.taskContent}>
          <div className={s.notCompleted}
               onClick={() => dispatch(isCompletedChange(t.value))}>
            {t.isCompleted && <img src={checkmark} className={s.completed} alt=''/>}
          </div>
          <div className={s.taskText}>
            {t.value}
          </div>
        </div>)}
    </div>
  );
}
