import { CommandResult } from "../utils/CommandResult";
import { WorkshopFinder } from "./WorkshopFinder";

export const WorkshopValidation = {
    validateWorkshopName: async (workshopName: string | undefined): Promise<CommandResult> => {
        if (!workshopName || workshopName?.length <= 3) {
            return CommandResult.failure("Workshop name is blank or is shorter than 3 characters");
        }
        if (await WorkshopFinder.findByName(workshopName)) {
            return CommandResult.failure("This user name is already taken");
        }
        return CommandResult.success();
    },
};
