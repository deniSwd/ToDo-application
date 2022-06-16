import React, {FC} from 'react';
import s from './taskField.module.scss'
import {selectTaskList} from "../../store/slices/taskListSlice";
import {useAppSelector} from "../../store/hooks";

export const TaskField: FC = () => {
  const tasks = useAppSelector(selectTaskList);
  /*  const dispatch = useAppDispatch();*/

  return (
    <div className={s.taskField}>
      {tasks.map((t, i)=>
        <div key ={i} className={s.taskContent}>
          <input type='checkbox'/>
          <div> {t.value}</div>
        </div>)}

    </div>
  );
}
