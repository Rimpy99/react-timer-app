import { createSlice } from '@reduxjs/toolkit';

export const minTimerSlice = createSlice({
    name: 'minTimer',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => { state.value += 1 },
    }
});

export default minTimerSlice.reducer;