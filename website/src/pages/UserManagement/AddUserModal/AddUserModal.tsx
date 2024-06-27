import styles from "./AddUserModal.module.scss";
import { ChangeEvent, ReactElement, useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { UserCreationDTO } from "../UserTypes.ts";

interface AddUserModalProps {
    visible: boolean;
    setIsVisible: (isVisible: boolean) => void;
    onSubmit: (dto: UserCreationDTO) => Promise<boolean>;
}

export const AddUserModal = (props: AddUserModalProps) => {
    const [userName, setUserName] = useState<string | undefined>(undefined);
    const [password, setPassword] = useState<string | undefined>(undefined);
    const [email, setEmail] = useState<string | undefined>(undefined);

    const handleSubmit = async () => {
        const dto: UserCreationDTO = {
            userName: userName!,
            password: password!,
            email: email!,
        };
        const result: boolean = await props.onSubmit(dto);
        if (result) {
            setUserName(undefined);
            setPassword(undefined);
            setEmail(undefined);
        }
    };

    const getFooter = (): ReactElement => {
        return (
            <>
                <Button onClick={() => handleSubmit()}>Submit</Button>
                <Button onClick={() => props.setIsVisible(false)}>Cancel</Button>
            </>
        );
    };

    return (
        <Dialog header="Add New User" visible={props.visible} onHide={() => props.setIsVisible(false)} footer={getFooter()}>
            <p className="m-0">User Name</p>
            <p className="m-0">
                <InputText value={userName} onChange={(event: ChangeEvent<HTMLInputElement>) => setUserName(event.target.value)} />
            </p>
            <p className="m-0">Password</p>
            <p className="m-0">
                <InputText value={password} onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} />
            </p>
            <p className="m-0">Email</p>
            <p className="m-0">
                <InputText value={email} onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)} />
            </p>
        </Dialog>
    );
};
