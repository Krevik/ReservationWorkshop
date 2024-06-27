import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { UserCreationDTO, UserDTO } from "./UserTypes.ts";
import { UserRestService } from "./UserRestService.ts";
import styles from "./UserManagement.module.scss";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { GenericColumn } from "../../components/DataTable/GenericColumn/GenericColumn.tsx";
import { Button } from "primereact/button";
import { AddUserModal } from "./AddUserModal/AddUserModal.tsx";
import { CommandResult } from "../../utils/CommandResult.ts";
import { NotificationUtils } from "../../components/Notifications/NotificationUtils.ts";
import { ConfirmationModal } from "../../components/Modal/ConfirmationModal.tsx";
import { genSaltSync, hashSync } from "bcrypt-ts";

export const UserManagement = () => {
    const [users, setUsers] = useState<UserDTO[]>([]);
    const [isAddUserModalVisible, setIsAddUserModalVisible] = useState<boolean>(false);
    const [userToDeleteName, setUserToDeleteName] = useState<string | undefined>(undefined);
    const [userToEdit, setUserToEdit] = useState<UserDTO | undefined>(undefined);

    const loadUsers = () => {
        UserRestService.getAllUsers().then(setUsers);
    };

    useEffect(loadUsers, []);

    const getActionButtonsColumnBody = (rowData: UserDTO): ReactElement => (
        <>
            {/*//TODO implement edition modal*/}
            <Button onClick={() => setUserToEdit(rowData)}>Edit User</Button>
            <Button onClick={() => setUserToDeleteName(rowData.name)}>Remove User</Button>
        </>
    );

    const getCreateUserButton = (): ReactElement => {
        return <Button onClick={() => setIsAddUserModalVisible(true)}>Add User</Button>;
    };

    const handleUserCreation = async (dto: UserCreationDTO): Promise<boolean> => {
        const salt = "$2a$10$llw0G6IyibUob8h5XRt9xuRczaGdCm/AiV6SSjf5v78XS824EGbh.";
        const hashedPassword = hashSync(dto.password, salt); // hash created previously created upon sign up
        dto.password = hashedPassword;

        const result: CommandResult = await UserRestService.createUser(dto);
        if (result.isSuccess) {
            setIsAddUserModalVisible(false);
            NotificationUtils.success("Success");
            loadUsers();
        } else {
            NotificationUtils.error(result.message!);
        }
        return result.isSuccess;
    };

    return (
        <div className={styles.userManagementContainer}>
            {getCreateUserButton()}
            <DataTable value={users}>
                <GenericColumn<UserDTO> field="id" header="Id" />
                <GenericColumn<UserDTO> field="name" header="Name" />
                <GenericColumn<UserDTO> field="email" header="Email" />
                <GenericColumn<UserDTO> field="createdAt" header="Creation Date" />
                <GenericColumn<UserDTO> field="role" header="Role" />
                <Column header="Actions" body={getActionButtonsColumnBody} />
            </DataTable>
            <AddUserModal visible={isAddUserModalVisible} setIsVisible={setIsAddUserModalVisible} onSubmit={handleUserCreation} />
            {userToDeleteName && (
                <ConfirmationModal
                    onConfirm={() => {}}
                    onHide={() => setUserToDeleteName(undefined)}
                    content={`Are you sure you want to delete user with name: ${userToDeleteName} ?`}
                />
            )}
        </div>
    );
};
