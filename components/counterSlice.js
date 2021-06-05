import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: '',
    },
    reducers: {
        increment: (state) => {
            state.value += 'a'
        },
        decrement: (state) => {
            state.value += 'b'
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer