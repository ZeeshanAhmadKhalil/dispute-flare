import { createSlice } from '@reduxjs/toolkit';

const sharedSlice = createSlice({
    name: 'shared',
    initialState: {
        loader: false,
    },
    reducers: {
        ChangeLoader: (state, action) => {
            state.loader = action.payload
        }
    },
    extraReducers: {
    },
});

export const {
    ChangeLoader,
} = sharedSlice.actions;

export default sharedSlice.reducer;