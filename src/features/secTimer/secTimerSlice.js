import { createSlice } from '@reduxjs/toolkit';

export const secTimerSlice = createSlice({
    name: 'secTimer',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => { state.value += 1 },
    }
});

export default secTimerSlice.reducer;