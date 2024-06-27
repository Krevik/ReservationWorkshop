import { CommandResult } from "../utils/CommandResult";
import { UserValidation } from "./UserValidation";
import { prisma } from "../../index";
import { randomBytes } from "node:crypto";
import { User } from "../generated/client";

export interface UserAuthenticationData {
    authToken: string;
    userId: number;
    userName: string;
}

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
    loginUser: async (userName: string, hashedPassword: string): Promise<UserAuthenticationData | null> => {
        const user: User | null = await prisma.user.findUnique({ where: { name: userName, password: hashedPassword } });
        if (!user) {
            return null;
        }

        const uniqueAuthToken: string = randomBytes(16).toString("hex");
        try {
            await prisma.user.update({ where: { id: user.id }, data: { authToken: uniqueAuthToken } });
            return { userId: user.id, authToken: uniqueAuthToken, userName: user.name };
        } catch (e) {
            return null;
        }
    },
    authenticateUserByToken: async (userName: string, authToken: string): Promise<UserAuthenticationData | null> => {
        const user: User | null = await prisma.user.findUnique({ where: { name: userName, authToken: authToken } });
        if (!user) {
            return null;
        }
        return { authToken: authToken, userId: user.id, userName: user.name };
    },
};
