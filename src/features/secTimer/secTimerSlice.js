import { createSlice } from '@reduxjs/toolkit';

export const secTimerSlice = createSlice({
    name: 'secTimer',
    initialState: { value: 0 },
    reducers: {
        secIncrement: (state) => { state.value++ },
        secReset: (state) =>  { state.value = 0 },
    }
});

export const { secIncrement, secReset } = secTimerSlice.actions;

export default secTimerSlice.reducer;