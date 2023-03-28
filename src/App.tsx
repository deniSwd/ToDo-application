import React, { FC } from 'react';
import {TaskField} from './components/taskField/TaskField';
import s from './App.module.scss';
import {InputField} from "./components/inputField/inputField";
import {Footer} from "./components/footer/footer";

const App: FC  = () => {
  return (
    <div className={s.app}>
      <div className={s.title}>
        -todos-
      </div>
      <div className={s.content}>
        <InputField />
        <TaskField/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
