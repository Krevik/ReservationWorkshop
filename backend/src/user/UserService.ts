import { CommandResult } from "../utils/CommandResult";
import { UserValidation } from "./UserValidation";
import { prisma } from "../../index";
import { User } from "@prisma/client";

export const UserService = {
    registerUser: async (userName: string, password: string, email: string): Promise<CommandResult> => {
        let validationResult = await UserValidation.validateUserName(userName);
        if (!validationResult.isSuccess) {
            return validationResult;
        }

        validationResult = UserValidation.validatePassword(password);
        if (!validationResult.isSuccess) {
            return validationResult;
        }

        validationResult = UserValidation.validateEmail(email);
        if (!validationResult.isSuccess) {
            return validationResult;
        }

        try {
            await prisma.user.create({ data: { name: userName, password: password, email: email } });
            return CommandResult.success();
        } catch (exception) {
            //TODO fix error handling?
            return CommandResult.failure(JSON.stringify(exception));
        }
    },
    //TODO we probably want some sessionId handling or token, anything
    authenticateUser: async (userName: string, password: string): Promise<CommandResult> => {
        const user: User | null = await prisma.user.findUnique({ where: { name: userName, password: password } });
        if (!user) {
            return CommandResult.failure("Invalid credentials");
        }
        return CommandResult.success();
    },
};
