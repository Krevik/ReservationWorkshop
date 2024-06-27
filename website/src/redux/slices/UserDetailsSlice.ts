import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserDetails = {
    userId: number;
    authToken: string;
    userName: string;
};

interface UserSliceProps {
    userDetails?: UserDetails;
}

const initialState: UserSliceProps = {
    userDetails: undefined,
};

const userDetailsSlice = createSlice({
    name: "userDetailsSlice",
    initialState: initialState,
    reducers: {
        setUserDetails(state, action: PayloadAction<UserDetails>) {
            state.userDetails = action.payload;
        },
        clearUserDetails(state) {
            state.userDetails = undefined;
        },
    },
});

export const userDetailsActions = userDetailsSlice.actions;
export const userDetailsReducer = userDetailsSlice.reducer;
