import { Dialog } from "primereact/dialog";
import { ReactElement } from "react";
import { Button } from "primereact/button";
import styles from "./ConfirmationModal.module.scss";

interface ConfirmationModalProps {
    content: ReactElement | string;
    onConfirm: () => void;
    onHide: () => void;
}

export const ConfirmationModal = (props: ConfirmationModalProps) => {
    const getFooter = (): ReactElement => {
        return (
            <div className={styles.buttonsRow}>
                <Button onClick={() => props.onConfirm()}>Yes</Button>
                <Button onClick={() => props.onHide()}>No</Button>
            </div>
        );
    };

    return (
        <Dialog visible onHide={props.onHide} header={"Are you sure?"} footer={getFooter()}>
            {props.content}
        </Dialog>
    );
};
