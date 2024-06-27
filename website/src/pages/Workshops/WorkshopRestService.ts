import RestUtils from "../../utils/RestUtils.ts";
import { WorkshopCreationDTO, WorkshopDTO } from "./WorkshopTypes.ts";
import { CommandResult } from "../../utils/CommandResult.ts";

export const WorkshopRestService = {
    getAll: async () => await RestUtils.get<WorkshopDTO[]>("/workshop/getAll"),
    createNew: async (dto: WorkshopCreationDTO) => await RestUtils.post<CommandResult>("/workshop/createNew", dto),
};
