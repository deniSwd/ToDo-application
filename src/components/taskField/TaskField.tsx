import React, {FC} from 'react';
import s from './taskField.module.scss'
import {isCompletedChange, selectItemsDisplay, selectTaskList} from "../../store/slices/tasksListSlice";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import tasksFilter from "./tasksFilter";

export const TaskField: FC = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(selectTaskList);
  const itemsDisplay = useAppSelector(selectItemsDisplay)


  return (
    <div className={s.taskField}>
      {tasksFilter(itemsDisplay,tasks).map((t, i)=>
        <div key ={i} className={s.taskContent}>
          <div className={t.isCompleted ? s.completed : s.notCompleted}
               onClick={()=>dispatch(isCompletedChange(t.value))}/>
          <div> {t.value} {t.isCompleted ? 'yes' : 'no'}</div>
        </div>)}
    </div>
  );
}
