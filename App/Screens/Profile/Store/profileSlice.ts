import { createSlice } from '@reduxjs/toolkit';



const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        profileDialogMain: false,
        importprofileDialog: false,
    },
    reducers: {
        setProfileDialogMain: (state: any, action) => {
            state.profileDialogMain = action.payload
        },
        setColumnVisibility: (state: any, action) => {

            const { field, hide } = action.payload || {}

            let columns = [...state.columns]
            let index = columns.findIndex(obj => obj.field == field)
            columns[index] = {
                ...columns[index],
                hide: !hide,
            }

            state.columns = columns
        },
        setAllColumnsVisibility: (state: any, action) => {

            const { hide } = action.payload || {}

            state.columns
                = state
                    .columns
                    .map((obj: any) => ({
                        ...obj,
                        hide:
                            obj.hidable ?
                                hide
                                :
                                obj.hide,
                    }))

        },
        setDefaultColumnsVisibility: (state: any, action) => {
            state.columns
                = state
                    .columns
                    .map((obj: any) => ({
                        ...obj,
                        hide:
                            state.defaultColumns.includes(obj.field) ?
                                false
                                :
                                true,
                    }))
        }
    },
    extraReducers: {
    },
});

export const {
    setProfileDialogMain,
    setColumnVisibility,
    setAllColumnsVisibility,
    setDefaultColumnsVisibility,
} = profileSlice.actions;

export default profileSlice.reducer;