import { Express, Request, Response } from "express";
import { CommandResult } from "../utils/CommandResult";
import { WorkshopDTO, WorkshopFinder } from "./WorkshopFinder";
import { WorkshopService } from "./WorkshopService";
import { ExtendedExpres } from "../utils/ExtendedExpres";
import { UserAuthentication } from "../security/UserAuthentication";
import { UserAuthenticationData } from "../user/UserService";

const controllerPath: string = "/workshop";
const UserController = {
    GET_WORKSHOPS: (serverApp: Express) =>
        serverApp.get(`${controllerPath}/getAll`, async (req: Request, res: Response) => {
            const result: WorkshopDTO[] = await WorkshopFinder.findAll();
            res.send(result);
        }),
    GET_BY_WORKSHOP_ID: (serverApp: Express) =>
        serverApp.get(`${controllerPath}/getByWorkshopId`, async (req: Request, res: Response) => {
            const { id } = req.params;
            const result: WorkshopDTO | null = await WorkshopFinder.findById(parseInt(id));
            res.send(result);
        }),
    GET_BY_OWNER_USER_ID: (serverApp: Express) =>
        serverApp.get(`${controllerPath}/getByOwnerUserId`, async (req: Request, res: Response) => {
            const { ownerUserId } = req.params;
            const result: WorkshopDTO[] = await WorkshopFinder.findAllByOwnerId(parseInt(ownerUserId));
            res.send(result);
        }),
    CREATE_NEW: (serverApp: Express) =>
        ExtendedExpres.authenticatedPost(serverApp, `${controllerPath}/createNew`, async (req: Request, res: Response, userAuthData: UserAuthenticationData) => {
            const { workshopName } = req.body;

            const result: CommandResult = await WorkshopService.createWorkshop(workshopName, userAuthData.userId);
            res.send(result);
        }),
};

export const WorkshopControllerService = {
    registerController: (serverApp: Express) => {
        UserController.GET_WORKSHOPS(serverApp);
        UserController.GET_BY_WORKSHOP_ID(serverApp);
        UserController.GET_BY_OWNER_USER_ID(serverApp);
        UserController.CREATE_NEW(serverApp);
    },
};
