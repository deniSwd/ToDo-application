import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import * as hooks from '../../store/hooks'
import {InputField} from './inputField';
import {ToDoObjectType} from '../../store/slices/tasksListSlice';

describe('InputField', () => {
  test('should input field works', async () => {
    const useDispatchSpy = jest.spyOn(hooks, 'useAppDispatch');
    const mockDispatchFn = jest.fn()
    useDispatchSpy.mockReturnValue(mockDispatchFn);

    render(<InputField/>)

    const input = screen.getByRole('textbox')
    await userEvent.type(input, 'test{enter}')

    expect(mockDispatchFn).toHaveBeenCalled()
    expect(mockDispatchFn).toHaveBeenCalledWith({
      type: 'taskList/addTask',
      payload: {
        value: 'test',
        isCompleted: false
      } as ToDoObjectType
    })
  })
})