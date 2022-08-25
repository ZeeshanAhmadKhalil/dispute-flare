import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            name: "D Luffy",
            pfp: "Assets/Images/user-pfp.png",
        },
    },
    reducers: {
    },
    extraReducers: {
        ChangeUser: (state, action) => {
            state.user = action.payload
        }
    },
});

export const {
    ChangeUser,
} = authSlice.actions;

export default authSlice.reducer;