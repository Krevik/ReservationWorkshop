import { CommandResult } from "../utils/CommandResult";
import { prisma } from "../../index";
import { User } from "@prisma/client";
import { WorkshopValidation } from "./WorkshopValidation";

export const WorkshopService = {
    createWorkshop: async (workshopName: string, creatorUserId: number): Promise<CommandResult> => {
        let validationResult = await WorkshopValidation.validateWorkshopName(workshopName);
        if (!validationResult.isSuccess) {
            return validationResult;
        }

        try {
            await prisma.workshop.create({ data: { name: workshopName, ownerId: creatorUserId } });
            return CommandResult.success();
        } catch (exception) {
            //TODO fix error handling?
            return CommandResult.failure(JSON.stringify(exception));
        }
    },
};
