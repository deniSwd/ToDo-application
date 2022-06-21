import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import * as hooks from '../../store/hooks'
import {Footer} from './footer';

const buttonTest = async (text: string)=>{
  const useDispatchSpy = jest.spyOn(hooks, 'useAppDispatch');
  const mockDispatchFn = jest.fn()
  useDispatchSpy.mockReturnValue(mockDispatchFn);
  const useSelectorSpy = jest.spyOn(hooks, 'useAppSelector')
  useSelectorSpy.mockReturnValue([])

  render(<Footer/>)

  const button = screen.getByText(text)
  await userEvent.click(button)
  return mockDispatchFn
}

describe('Footer', () => {
  test('should "All" button works', async () => {
    const allButton = await buttonTest('All')
    expect(allButton).toHaveBeenCalled()
    expect(allButton).toHaveBeenCalledWith({
      type: 'taskList/setItemsDisplay',
      payload: 'All'
    })
  })
  test('should "Active" button works', async () => {
    const allButton = await buttonTest('Active')
    expect(allButton).toHaveBeenCalled()
    expect(allButton).toHaveBeenCalledWith({
      type: 'taskList/setItemsDisplay',
      payload: 'Active'
    })
  })
  test('should "Completed" button works', async () => {
    const allButton = await buttonTest('Completed')
    expect(allButton).toHaveBeenCalled()
    expect(allButton).toHaveBeenCalledWith({
      type: 'taskList/setItemsDisplay',
      payload: 'Completed'
    })
  })
  test('should "Clear completed" button works', async () => {
    const allButton = await buttonTest('Clear completed')
    expect(allButton).toHaveBeenCalled()
    expect(allButton).toHaveBeenCalledWith({
      type: 'taskList/deleteCompletedTasks',
    })
  })
})