import React from 'react';
import s from '../counter/Counter.module.css'
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {selectCount,} from '../../store/slices/counterSlice';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  return (
    <div className={s.row}>
      MY APP
    </div>
  );
}
