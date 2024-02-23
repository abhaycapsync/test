"use client";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { useAppSelector } from "../ReduxHooks";
import { useMemo } from "react";

interface CounterState {
  value: number;
}

const initialState = { value: 0 } satisfies CounterState as CounterState;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;

const selectCount = (state: RootState) => state.counter.value;
export const useCount = () => {
  const value = useAppSelector(selectCount);
  return useMemo(() => value, [value]);
};
