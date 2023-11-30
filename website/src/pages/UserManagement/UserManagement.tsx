import { ReactElement, useEffect, useMemo, useState } from "react";
import { UserDTO } from "./UserTypes.ts";
import { UserRestService } from "./UserRestService.ts";
import styles from "./UserManagement.module.scss";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { GenericColumn } from "../../components/DataTable/GenericColumn/GenericColumn.tsx";
import { Button } from "primereact/button";

export const UserManagement = () => {
    const [users, setUsers] = useState<UserDTO[]>([]);

    const loadUsers = () => {
        UserRestService.getAllUsers().then(setUsers);
    };

    useEffect(loadUsers, []);

    const getActionButtonsColumnBody = (rowData: UserDTO): ReactElement => (
        <>
            <Button>Edit User</Button>
            <Button>Remove User</Button>
        </>
    );

    return (
        <div className={styles.userManagementContainer}>
            <DataTable value={users}>
                <GenericColumn<UserDTO> field="id" header="Id" />
                <GenericColumn<UserDTO> field="name" header="Name" />
                <GenericColumn<UserDTO> field="email" header="Email" />
                <GenericColumn<UserDTO> field="createdAt" header="Creation Date" />
                <GenericColumn<UserDTO> field="role" header="Role" />
                <Column header="Action Buttons" body={getActionButtonsColumnBody} />
            </DataTable>
        </div>
    );
};
