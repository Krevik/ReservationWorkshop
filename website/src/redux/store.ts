import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { notificationsReducer } from "./slices/NotificationsSlice.ts";

const combinedReducers = combineReducers({
    notificationsReducer: notificationsReducer,
});

export const appStore = configureStore({
    reducer: combinedReducers,
});

export type AppState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
