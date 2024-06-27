import { useUserDetails } from "../../redux/hooks/useUserDetails.ts";
import { useEffect } from "react";

export const UserSessionManager = () => {
    const userDetailsHook = useUserDetails();

    useEffect(() => {
        if (!userDetailsHook.isUserLoggedIn()) {
            userDetailsHook.restoreUserDetailsFromStorage();
        }
    }, []);

    userDetailsHook.useUserDetailsStorageSaver();

    return <></>;
};
