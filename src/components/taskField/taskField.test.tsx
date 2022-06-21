import React from 'react';
import {render, screen} from '@testing-library/react';
import * as hooks from '../../store/hooks'
import {TaskField} from "./TaskField";
import {RootState} from "../../store/store";

describe('TaskField', () => {
  test('should input field works', () => {
    const useDispatchSpy = jest.spyOn(hooks, 'useAppDispatch');
    const mockDispatchFn = jest.fn()
    useDispatchSpy.mockReturnValue(mockDispatchFn);
    const useSelectorSpy = jest.spyOn(hooks, 'useAppSelector')
    const mockStore: RootState = {
      taskList: {
        todos: [
          {
            value: 'text1',
            isCompleted: true
          },
          {
            value: 'text2',
            isCompleted: false
          }
        ],
        itemsDisplay: 'All'
      }
    }
    useSelectorSpy.mockImplementation(selector => selector(mockStore))

    render(<TaskField/>)

    const text1 = screen.getByText(/text1/)
    const text2 = screen.getByText(/text2/)

    expect(text1).toBeInTheDocument()
    expect(text2).toBeInTheDocument()

  })
})