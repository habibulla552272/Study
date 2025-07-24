import { createSlice } from "@reduxjs/toolkit";
import initialCountersData from "../../data/counterData";

// Counter এর টাইপ ডিফাইন করা
export interface CounterType {
  id: number;
  value: number;
}


const counterSlice = createSlice({
  name: "counters",
  initialState: initialCountersData as CounterType[],
  reducers: {
    increment: (state, action) => {
      const counterIndex = state.findIndex((c) => c.id === action.payload);
      if (counterIndex !== -1) {
        state[counterIndex].value++;
      }
    },
    decrement: (state, action) => {
      const counterIndex = state.findIndex((c) => c.id === action.payload);
      if (counterIndex !== -1) {
        state[counterIndex].value--;
      }
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement } = counterSlice.actions;
