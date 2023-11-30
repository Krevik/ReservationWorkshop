import { Notification, notificationsActions } from "../../redux/slices/NotificationsSlice.ts";
import { useSelector } from "react-redux";
import { AppState, appStore } from "../../redux/store.ts";
import { Toast, ToastMessage } from "primereact/toast";
import { useCallback, useEffect, useRef } from "react";

export const NotificationsOverlay = () => {
    const notificationToShow: Notification | undefined = useSelector((state: AppState) => state.notificationsReducer.notification);
    const notificationsToast = useRef<Toast | null>(null);

    const getToastMessage = useCallback(() => {
        const toastMessage: ToastMessage = {
            severity: notificationToShow?.type,
            summary: notificationToShow?.title,
            detail: notificationToShow?.message,
        };
        return toastMessage;
    }, [notificationToShow]);

    useEffect(() => {
        if (notificationToShow) {
            notificationsToast.current?.show(getToastMessage());
            appStore.dispatch(notificationsActions.clearNotification());
        }
    }, [notificationToShow]);

    return <Toast ref={notificationsToast} />;
};
