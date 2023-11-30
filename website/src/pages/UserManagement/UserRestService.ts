import RestUtils from "../../utils/RestUtils.ts";
import { UserDTO } from "./UserTypes.ts";

export const UserRestService = {
    getAllUsers: async () => await RestUtils.get<UserDTO[]>("/user/getAll"),
};
