import { createSlice } from '@reduxjs/toolkit';

const clientsSlice = createSlice({
    name: 'clients',
    initialState: {
        clientColumns: [
            { field: 'clientName', headerName: 'Client Name', width: 70 },
            { field: 'email', headerName: 'Email', width: 130 },
            { field: 'mobile', headerName: 'Mobile', width: 130 },
            { field: 'assignedTo', headerName: 'Assigned To', width: 130 },
            { field: 'followUp', headerName: 'Follow Up', width: 130 },
            { field: 'lastLogin', headerName: 'Last Login', width: 130 },
            { field: 'status', headerName: 'Status', width: 130 },
        ],
    },
    reducers: {
    },
    extraReducers: {
    },
});

// export const {
// } = clientsSlice.actions;

export default clientsSlice.reducer;