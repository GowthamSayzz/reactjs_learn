import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice(
    {
        name: 'counter',
        initialState: 0,
        reducers: {
            increment: (state, action) => {
                state = state + 1;
                return state;
            },
            decrement: (state, action) => {
                state = state - 1;
                return state;
            },
            makeZero: (state, action) => {
                state = state * 0;
                return state;
            }
        }
    }
)

export const { increment, decrement, makeZero } = counterSlice.actions;
export default counterSlice.reducer;