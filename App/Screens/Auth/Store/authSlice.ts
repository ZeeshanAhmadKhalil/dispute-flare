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
        setUser: (state, action) => {
            state.user = action.payload
        }
    },
    extraReducers: {
    },
});

export const {
    setUser,
} = authSlice.actions;

export default authSlice.reducer;