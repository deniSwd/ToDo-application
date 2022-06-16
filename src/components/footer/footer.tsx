import React, {FC} from "react";
import s from '../footer/footer.module.scss'
import {useAppDispatch} from "../../store/hooks";
import {deleteCompletedTasks} from "../../store/slices/taskListSlice";

export const Footer: FC = () => {
  /* const count = useAppSelector(selectCount);;*/
   const dispatch = useAppDispatch()

  return (
    <div className={s.footerContent}>
      <div>Items left</div>
      <div className={s.taskType}>
        <div>All</div>
        <div>Active</div>
        <div>Completed</div>
      </div>
      <div onClick={()=>dispatch(deleteCompletedTasks())}>Clear completed</div>
    </div>
  );
}