import { Express, Request, Response } from "express";
import { UserDTO, UserFinder } from "./userFinder";
import { parseNumber } from "@sequelize/core/types/utils/parse-number";

const controllerPath: string = "/user";
const UserController = {
    GET_USERS: (serverApp: Express) =>
        serverApp.get(`${controllerPath}/getAll`, async (req: Request, res: Response) => {
            const result: UserDTO[] = await UserFinder.findAll();
            res.send(result);
        }),
    GET_USER_BY_ID: (serverApp: Express) =>
        serverApp.get(`${controllerPath}/getAll`, async (req: Request, res: Response) => {
            const { id } = req.params;
            const result: UserDTO | null = await UserFinder.findById(parseNumber(id));
            res.send(result);
        }),
};

export const UserControllerService = {
    registerUserController: (serverApp: Express) => {
        UserController.GET_USERS(serverApp);
        UserController.GET_USER_BY_ID(serverApp);
    },
};
