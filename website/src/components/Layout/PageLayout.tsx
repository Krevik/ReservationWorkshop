import styles from "./PageLayout.module.scss";
import type { PropsWithChildren } from "react";
import { PageNavigation } from "../Navigation/PageNavigation.tsx";
import { NotificationsOverlay } from "../Notifications/NotificationsOverlay.tsx";

export const PageLayout = (props: PropsWithChildren) => {
    return (
        <div className={styles.pageContainer}>
            <NotificationsOverlay />
            <PageNavigation />
            {props.children}
        </div>
    );
};
