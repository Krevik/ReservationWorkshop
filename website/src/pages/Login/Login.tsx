import styles from "./Login.module.scss";
import { ChangeEvent, useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { UserAuthenticationDTO } from "../UserManagement/UserTypes.ts";
import { hashSync } from "bcrypt-ts";
import RestUtils from "../../utils/RestUtils.ts";
import { UserRestService } from "../UserManagement/UserRestService.ts";
import { UserDetails, userDetailsActions } from "../../redux/slices/UserDetailsSlice.ts";
import { appStore } from "../../redux/store.ts";
import { NotificationUtils } from "../../components/Notifications/NotificationUtils.ts";
import { useNavigate } from "react-router-dom";
import { PagePaths } from "../../utils/PagePaths.ts";

export const Login = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState<string | undefined>(undefined);
    const [password, setPassword] = useState<string | undefined>(undefined);

    const handleSubmit = async () => {
        const salt = "$2a$10$llw0G6IyibUob8h5XRt9xuRczaGdCm/AiV6SSjf5v78XS824EGbh.";
        const hashedPassword = hashSync(password!, salt);

        const userAuthDTO: UserAuthenticationDTO = {
            userName: userName!,
            hashedPassword: hashedPassword,
        };

        const result: UserDetails | null = await UserRestService.authenticate(userAuthDTO);
        if (result) {
            appStore.dispatch(userDetailsActions.setUserDetails(result));
            NotificationUtils.success("Successfully Logged in!");
            //TODO save data to storage
            navigate(`../${PagePaths.HOME}`);
        } else {
            NotificationUtils.error("Invalid username or password!");
        }
    };

    return (
        <div className={styles.pageContainer}>
            <p className="m-0">User Name</p>
            <p className="m-0">
                <InputText value={userName} type={"text"} onChange={(event: ChangeEvent<HTMLInputElement>) => setUserName(event.target.value)} />
            </p>
            <p className="m-0">Password</p>
            <p className="m-0">
                <InputText value={password} type={"password"} onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)} />
            </p>
            <Button onClick={() => handleSubmit()}>Submit</Button>
        </div>
    );
};
