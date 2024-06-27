import styles from "./PageNavigation.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { PagePaths } from "../../utils/PagePaths.ts";
import { ReactElement } from "react";
import { Button } from "primereact/button";
import { UserDetails, userDetailsActions } from "../../redux/slices/UserDetailsSlice.ts";
import { useSelector } from "react-redux";
import { AppState, appStore } from "../../redux/store.ts";
import { useUserDetails } from "../../redux/hooks/useUserDetails.ts";

type NavigationButton = NavigationTab | ActionButton;

interface NavigationTab {
    pagePath: keyof typeof PagePaths;
    label: string;
    onClick?: never;
}

interface ActionButton {
    onClick: () => void;
    label: string;
    pagePath?: never;
}

const createNavigationTab = (label: string, pagePath: keyof typeof PagePaths, conditionToShow?: () => boolean): NavigationButton | undefined => {
    if (!conditionToShow || (conditionToShow && conditionToShow())) {
        return {
            label: label,
            pagePath: pagePath,
        };
    }
    return undefined;
};

const createActionButton = (label: string, onClick: () => void, conditionToShow?: () => boolean): NavigationButton | undefined => {
    if (!conditionToShow || (conditionToShow && conditionToShow())) {
        return {
            label: label,
            onClick: onClick,
        };
    }
    return undefined;
};

export const PageNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const userDetailsHook = useUserDetails();

    const isOnPage = (path: string): boolean => location.pathname.includes(path);

    const navigationTabs = (): (NavigationButton | undefined)[] => [
        createNavigationTab("Home Page", "HOME"),
        createNavigationTab("User management", "USER_MANAGEMENT"),
        createNavigationTab("Workshops", "WORKSHOPS"),
        createNavigationTab("Login", "LOGIN", () => !userDetailsHook.userDetails),
        createActionButton("Logout", userDetailsHook.logoutUser, () => !!userDetailsHook.userDetails),
    ];

    const filteredNavigationTabs = (): NavigationButton[] => navigationTabs().filter((tab: NavigationButton | undefined) => tab !== undefined) as NavigationButton[];

    const mapNavigationTabsToNavigationButtons = (): ReactElement[] =>
        filteredNavigationTabs().map((tab: NavigationButton) => {
            if (tab.onClick) {
                return (
                    <Button key={tab.label} onClick={tab.onClick}>
                        {tab.label}
                    </Button>
                );
            }

            if (tab.pagePath) {
                return (
                    <Button key={tab.label} onClick={() => !isOnPage(tab.pagePath) && navigate(`../${tab.pagePath}`)}>
                        {tab.label}
                    </Button>
                );
            }

            return <></>;
        });

    const getUserDetailsElement = (): ReactElement =>
        userDetailsHook.isUserLoggedIn() ? (
            <div className={styles.userDetailsContainer}>
                <span>Logged as</span>
                {/*<span>{userDetails.userId}</span>*/}
                <span className={styles.userName}>{userDetailsHook.userDetails!.userName}</span>
            </div>
        ) : (
            <></>
        );

    return (
        <div className={styles.topBarContainer}>
            {getUserDetailsElement()}
            <div className={styles.navigationContainer}>{mapNavigationTabsToNavigationButtons()}</div>
        </div>
    );
};
