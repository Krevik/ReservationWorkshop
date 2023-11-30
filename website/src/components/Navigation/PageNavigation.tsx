import styles from "./PageNavigation.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { PagePaths } from "../../utils/PagePaths.ts";
import { ReactElement } from "react";
import { Button } from "primereact/button";

interface NavigationTab {
    label: string;
    pagePath: keyof typeof PagePaths;
}

const createNavigationTab = (label: string, pagePath: keyof typeof PagePaths): NavigationTab => ({
    label: label,
    pagePath: pagePath,
});

const navigationTabs: NavigationTab[] = [createNavigationTab("Home Page", "HOME"), createNavigationTab("User management", "USER_MANAGEMENT")];

export const PageNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isOnPage = (path: string) => location.pathname.includes(path);
    const mapNavigationTabsToNavigationButtons = (): ReactElement[] =>
        navigationTabs.map((tab) => <Button onClick={() => !isOnPage(tab.pagePath) && navigate(`../${tab.pagePath}`)}>{tab.label}</Button>);

    return <div className={styles.navigationContainer}>{mapNavigationTabsToNavigationButtons()}</div>;
};
