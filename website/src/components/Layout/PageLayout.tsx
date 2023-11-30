import styles from "./PageLayout.module.scss";
import type { PropsWithChildren } from "react";
import { PageNavigation } from "../Navigation/PageNavigation.tsx";

export const PageLayout = (props: PropsWithChildren) => {
    return (
        <div className={styles.pageContainer}>
            <PageNavigation />
            {props.children}
        </div>
    );
};
