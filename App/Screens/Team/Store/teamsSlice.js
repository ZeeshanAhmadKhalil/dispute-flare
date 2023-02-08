import { createSlice } from '@reduxjs/toolkit';



const teamsSlice = createSlice({
    name: 'teams',
    initialState: {
        addTeamDialog: false,
    },
    reducers: {
        setAddTeamDialog: (state, action) => {
            state.addTeamDialog = action.payload
        },
    },
    extraReducers: {
    },
});

export const {
    setAddTeamDialog,
} = teamsSlice.actions;

export default teamsSlice.reducer;