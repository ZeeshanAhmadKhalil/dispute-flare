import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux"
import { persistReducer } from 'redux-persist'
import { authApi } from '@Screens/Auth/Services/authApi'
import auth from '@Screens/Auth/Store/authSlice'
import clients from '@Screens/Client/Store/clientsSlice'
import creditor from '@Screens/Creditor/Store/creditorSlice'
import shared from '@Screens/Shared/Store/sharedSlice'
import layout from '@Screens/Layouts/Store/layoutSlice'
import dispute from '@Screens/Dispute/Store/disputeSlice'
import documents from '@Screens/Documents/Store/documentsSlice'
import letterlibrary from '@Screens/LetterLibrary/Store/letterlibrarySlice'
import internalNote from '@Screens/InternalNote/Store/internalNoteSlice'
import templates from '@Screens/Templates/Store/templatesSlice'
import reasons from '@Screens/Reasons/Store/reasonsSlice'
import instructions from '@Screens/Instructions/Store/instructionsSlice'
import affiliates from '@Screens/Affiliates/Store/affiliatesSlice'
import affiliateDashboard from '@Screens/AffiliateDashboard/Store/affiliateDashboardSlice'
import commission from '@Screens/Commission/Store/commissionSlice'
import teams from '@Screens/Team/Store/teamsSlice'
import profile from '@Screens/Profile/Store/profileSlice'
import storage from '@Store/storage'

const reducers = combineReducers({
    auth,
    clients,
    creditor,
    commission,
    dispute,
    documents,
    internalNote,
    layout,
    letterlibrary,
    shared,
    templates,
    reasons,
    instructions,
    affiliates,
    affiliateDashboard,
    teams,
    profile,
    [authApi.reducerPath]: authApi.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(
            authApi.middleware,
        ),
});

export default store;