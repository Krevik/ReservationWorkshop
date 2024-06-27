import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { notificationsReducer } from "./slices/NotificationsSlice.ts";
import { userDetailsReducer } from "./slices/UserDetailsSlice.ts";

const combinedReducers = combineReducers({
    notificationsReducer: notificationsReducer,
    userDetailsReducer: userDetailsReducer,
});

export const appStore = configureStore({
    reducer: combinedReducers,
});

export type AppState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
