import React, {FC} from 'react';
import s from './taskField.module.scss'
import {isCompletedChange, selectTaskList} from "../../store/slices/taskListSlice";
import {useAppDispatch, useAppSelector} from "../../store/hooks";

export const TaskField: FC = () => {
  const tasks = useAppSelector(selectTaskList);
    const dispatch = useAppDispatch();

  return (
    <div className={s.taskField}>
      {tasks.map((t, i)=>
        <div key ={i} className={s.taskContent}>
          <div className={t.isCompleted ? s.completed : s.notCompleted}
               onClick={()=>dispatch(isCompletedChange(t.value))}/>
          <div> {t.value} {t.isCompleted ? 'yes' : 'no'}</div>
        </div>)}

    </div>
  );
}
