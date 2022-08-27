import { configureStore } from '@reduxjs/toolkit';

import minTimerReducer from './../features/minTimer/minTimerSlice';
import secTimerReducer from './../features/secTimer/secTimerSlice';

export default configureStore({
    reducer: {
        minTimer: minTimerReducer,
        secTimer: secTimerReducer,
    },
})