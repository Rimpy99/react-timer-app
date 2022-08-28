import { createSlice } from '@reduxjs/toolkit';

const buttonConditionSlice = createSlice({
    name: 'buttonCondition',
    initialState: { value: true },
    reducers: {
        changeToTrue: (state) => { state.value = true },
        changeToFalse: (state) => { state.value = false },
    }
});

export const { changeToTrue, changeToFalse } = buttonConditionSlice.actions;

export default buttonConditionSlice.reducer;