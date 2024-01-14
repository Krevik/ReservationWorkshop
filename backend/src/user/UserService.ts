import { CommandResult } from "../utils/CommandResult";
import { UserValidation } from "./UserValidation";
import { prisma } from "../../index";
import { User } from "@prisma/client";
import { randomBytes } from "node:crypto";

export interface UserAuthenticationData {
    authToken: string;
    userId: number;
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
            await prisma.user.create({ data: { name: userName, password: password, email: email, authToken: "" } });
            return CommandResult.success();
        } catch (exception) {
            //TODO fix error handling?
            return CommandResult.failure(JSON.stringify(exception));
        }
    },
    //TODO crypto , change to some new type of command result
    loginUser: async (userName: string, password: string): Promise<UserAuthenticationData | null> => {
        const user: User | null = await prisma.user.findUnique({ where: { name: userName, password: password } });
        if (!user) {
            return null;
        }
        //TODO generate some token and put it in the request
        const uniqueAuthToken: string = randomBytes(256).toString("hex");
        try {
            await prisma.user.update({ where: { id: user.id }, data: { authToken: uniqueAuthToken } });
            return { userId: user.id, authToken: uniqueAuthToken };
        } catch (e) {
            return null;
        }
    },
    //TODO crypto
    authenticateUserByToken: async (userName: string, authToken: string): Promise<UserAuthenticationData | null> => {
        const user: User | null = await prisma.user.findUnique({ where: { name: userName, authToken: authToken } });
        if (!user) {
            return null;
        }
        return { authToken: authToken, userId: user.id };
    },
};
