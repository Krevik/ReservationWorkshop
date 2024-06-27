import RestUtils from "../../utils/RestUtils.ts";
import { UserAuthenticationDTO, UserCreationDTO, UserDTO } from "./UserTypes.ts";
import { CommandResult } from "../../utils/CommandResult.ts";
import { UserDetails } from "../../redux/slices/UserDetailsSlice.ts";

export const UserRestService = {
    getAllUsers: async () => await RestUtils.get<UserDTO[]>("/user/getAll"),
    createUser: async (dto: UserCreationDTO) => await RestUtils.post<CommandResult>("/user/register", dto),
    authenticate: async (dto: UserAuthenticationDTO) => await RestUtils.post<UserDetails | null>("/user/authenticate", dto),
};
