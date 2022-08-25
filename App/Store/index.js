import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authApi } from '@Screens/Auth/Services/authApi'
import auth from '@Screens/Auth/Store/authSlice'
import shared from '@Screens/Shared/Store/sharedSlice'

const reducers = combineReducers({
    shared,
    auth,
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