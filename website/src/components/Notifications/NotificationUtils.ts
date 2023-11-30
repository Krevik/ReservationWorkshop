import { appStore } from "../../redux/store.ts";
import { notificationsActions } from "../../redux/slices/NotificationsSlice.ts";

export const NotificationUtils = {
    success: (message: string) => appStore.dispatch(notificationsActions.addNotification({ type: "success", title: "Success", message: message })),
    warn: (message: string) => appStore.dispatch(notificationsActions.addNotification({ type: "warn", title: "Warning", message: message })),
    info: (message: string) => appStore.dispatch(notificationsActions.addNotification({ type: "info", title: "Information", message: message })),
    error: (message: string) => appStore.dispatch(notificationsActions.addNotification({ type: "error", title: "Error", message: message })),
};
