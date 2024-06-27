import { AuthenticationRequest } from "../../utils/RestUtils.ts";

export interface WorkshopDTO {
    id: number;
    name: string;
    ownerId: number;
}

export interface WorkshopCreationDTO extends AuthenticationRequest {
    workshopName: string | undefined;
}
