import { createSlice } from '@reduxjs/toolkit';

export const minTimerSlice = createSlice({
    name: 'minTimer',
    initialState: { value: 0 },
    reducers: {
        minIncrement: (state) => { state.value += 1 },
        minReset: (state) =>  { state.value = 0 },
    }
});

export const { minIncrement, minReset } = minTimerSlice.actions;

export default minTimerSlice.reducer;