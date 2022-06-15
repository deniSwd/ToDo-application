import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';


export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  },
});

export const { increment } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

/*export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };*/

export default counterSlice.reducer;
