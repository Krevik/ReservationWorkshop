import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { ChangeEvent, useState } from "react";
import { Button } from "primereact/button";
import { WorkshopCreationDTO } from "../WorkshopTypes.ts";
import { UserDetails } from "../../../redux/slices/UserDetailsSlice.ts";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store.ts";
import { WorkshopRestService } from "../WorkshopRestService.ts";
import { CommandResult } from "../../../utils/CommandResult.ts";
import { NotificationUtils } from "../../../components/Notifications/NotificationUtils.ts";

interface AddNewWorkshopModalProps {
    onHide: () => void;
    refreshWorkshops: () => void;
}

export const AddNewWorkshopModal = (props: AddNewWorkshopModalProps) => {
    const [name, setName] = useState<string | undefined>(undefined);
    const userDetails: UserDetails | undefined = useSelector((state: AppState) => state.userDetailsReducer.userDetails);

    const handleSubmit = async () => {
        if (!userDetails) {
            return;
        }
        const dto: WorkshopCreationDTO = {
            authToken: userDetails.authToken,
            userNameReq: userDetails.userName,
            workshopName: name,
        };

        const commandResult: CommandResult = await WorkshopRestService.createNew(dto);
        if (commandResult.isSuccess) {
            props.onHide();
            props.refreshWorkshops();
        } else {
            NotificationUtils.error(commandResult.message!);
        }
    };

    return (
        <Dialog visible onHide={props.onHide}>
            <p>Name</p>
            <InputText onChange={(event: ChangeEvent<HTMLInputElement>) => setName(event.target.value)} />
            <Button onClick={handleSubmit}>Submit</Button>
        </Dialog>
    );
};
