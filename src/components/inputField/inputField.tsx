import React, { FC, useState, KeyboardEvent } from 'react'
import s from '../inputField/inputField.module.scss'
import { useAppDispatch } from '../../store/hooks'
import { addTask, ToDoObjectType } from '../../store/slices/tasksListSlice'

export const InputField: FC = () => {
  const [taskValue, setTaskValue] = useState<string>('')
  const dispatch = useAppDispatch()

  const handleKeyDown = (ev: KeyboardEvent<HTMLElement>) => {
    const newTask: ToDoObjectType = {
      value: taskValue,
      isCompleted: false,
    }
    if (ev.key === 'Enter' && taskValue !== '') {
      dispatch(addTask(newTask))
      setTaskValue('')
    }
  }

  return (
    <div className={s.inputField}>
      <input value={taskValue}
             onKeyDown={handleKeyDown}
             onChange={e => setTaskValue(e.target.value)}
             placeholder='What needs to be done?'
             className={s.input} />
    </div>
  )
}