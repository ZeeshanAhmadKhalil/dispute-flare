import { createSlice } from '@reduxjs/toolkit';

const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        addTaskDialog: false,
    },
    reducers: {
        setAddTaskDialog: (state, action) => {
            state.addTaskDialog = action.payload
        }
    },
    extraReducers: {
    },
});

export const {
    setAddTaskDialog,
} = calendarSlice.actions;

export default calendarSlice.reducer;