import { useSelector } from "react-redux";
import { AppState, appStore } from "../store.ts";
import { UserDetails, userDetailsActions } from "../slices/UserDetailsSlice.ts";
import { useEffect } from "react";

export const useUserDetails = () => {
    const userDetails: UserDetails | undefined = useSelector((state: AppState) => state.userDetailsReducer.userDetails);

    const useUserDetailsStorageSaver = () =>
        useEffect(() => {
            if (userDetails) {
                localStorage.setItem("userDetails", JSON.stringify(userDetails));
            }
        }, [userDetails]);

    const logoutUser = () => {
        localStorage.removeItem("userDetails");
        appStore.dispatch(userDetailsActions.clearUserDetails());
    };

    const restoreUserDetailsFromStorage = () => {
        const userDetailsString: string | null = localStorage.getItem("userDetails");
        if (!userDetailsString) {
            return undefined;
        }
        const userDetails: UserDetails | undefined = JSON.parse(userDetailsString) as UserDetails;
        userDetails && appStore.dispatch(userDetailsActions.setUserDetails(userDetails));
    };

    const isUserLoggedIn = (): boolean => !!userDetails;

    return { userDetails, useUserDetailsStorageSaver, isUserLoggedIn, restoreUserDetailsFromStorage, logoutUser };
};
