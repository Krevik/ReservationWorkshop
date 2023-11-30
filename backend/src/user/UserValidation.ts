import { CommandResult } from "../utils/CommandResult";
import { UserFinder } from "./UserFinder";

export const UserValidation = {
    validateUserName: async (userName: string): Promise<CommandResult> => {
        if (!userName) {
            return CommandResult.failure("User name is required");
        }
        if (userName.length <= 3) {
            return CommandResult.failure("User name has to have at least 3 characters");
        }
        if (await UserFinder.findByName(userName)) {
            return CommandResult.failure("This user name is already taken");
        }
        return CommandResult.success();
    },
    validatePassword: (password: string): CommandResult => {
        if (!password) {
            return CommandResult.failure("Password is required");
        }
        if (password.length <= 3) {
            return CommandResult.failure("Password has to be at least 3 characters long");
        }
        return CommandResult.success();
    },
    validateEmail: (email: string): CommandResult => {
        if (!email) {
            return CommandResult.failure("Email is required");
        }
        if (email.length <= 3) {
            return CommandResult.failure("Email is too short");
        }
        return CommandResult.success();
    },
};
