import React, {FC} from "react";
import s from '../footer/footer.module.scss'

export const Footer: FC = () => {
  /* const count = useAppSelector(selectCount);
   const dispatch = useAppDispatch();*/

  return (
    <div className={s.footerContent}>
      <div>Items left</div>
      <div className={s.taskType}>
        <div>All</div>
        <div>Active</div>
        <div>Completed</div>
      </div>
      <div>Clear completed</div>
    </div>
  );
}