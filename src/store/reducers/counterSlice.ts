import { IActive } from '@/types/store';
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: (state, { payload }: IActive<number>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log({ payload }, '加');
      state.value += 1;
    },
    decremented: (state, { payload }: IActive<number>) => {
      console.log(payload, '减');
      state.value -= 1;
    }
  }
});
// 导出模块
export default counterSlice;
// 导出功能
export const { incremented, decremented } = counterSlice.actions;
