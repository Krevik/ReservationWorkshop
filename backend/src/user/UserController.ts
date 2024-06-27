import { Express, Request, Response } from "express";
import { UserDTO, UserFinder } from "./UserFinder";
import { CommandResult } from "../utils/CommandResult";
import { UserAuthenticationData, UserService } from "./UserService";

const controllerPath: string = "/user";
const UserController = {
    GET_USERS: (serverApp: Express) =>
        serverApp.get(`${controllerPath}/getAll`, async (req: Request, res: Response) => {
            const result: UserDTO[] = await UserFinder.findAll();
            res.send(result);
        }),
    GET_USER_BY_ID: (serverApp: Express) =>
        serverApp.get(`${controllerPath}/getById`, async (req: Request, res: Response) => {
            const { id } = req.params;
            const result: UserDTO | null = await UserFinder.findById(parseInt(id));
            res.send(result);
        }),
    REGISTER_USER: (serverApp: Express) =>
        serverApp.post(`${controllerPath}/register`, async (req: Request, res: Response) => {
            const { userName, password, email } = req.body;
            const result: CommandResult = await UserService.registerUser(userName, password, email);
            res.send(result);
        }),
    LOGIN_USER: (serverApp: Express) =>
        serverApp.post(`${controllerPath}/authenticate`, async (req: Request, res: Response) => {
            const { userName, password } = req.body;
            const result: UserAuthenticationData | null = await UserService.loginUser(userName, password);
            res.send(result);
        }),
};

export const UserControllerService = {
    registerUserController: (serverApp: Express) => {
        UserController.GET_USERS(serverApp);
        UserController.GET_USER_BY_ID(serverApp);
        UserController.REGISTER_USER(serverApp);
        UserController.LOGIN_USER(serverApp);
    },
};
