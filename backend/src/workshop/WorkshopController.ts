import { Express, Request, Response } from "express";
import { UserDTO, UserFinder } from "../user/UserFinder";
import { CommandResult } from "../utils/CommandResult";
import { UserService } from "../user/UserService";
import { WorkshopDTO, WorkshopFinder } from "./WorkshopFinder";
import { WorkshopService } from "./WorkshopService";
import { UserAuthentication } from "../security/UserAuthentication";
import { ExtendedExpres } from "../utils/ExtendedExpres";

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
    // CREATE_NEW: (serverApp: Express) =>
    //     serverApp.post(`${controllerPath}/createNew`, async (req: Request, res: Response) => {
    //         const { workshopName, password } = req.body;
    //         const userAuthentication: UserAuthentication = await new UserAuthentication(req).checkAuth();
    //         //TODO
    //
    //         const result: CommandResult = await WorkshopService.createWorkshop(workshopName, password);
    //         res.send(result);
    //     }),
    CREATE_NEW: (serverApp: Express) =>
        ExtendedExpres.authenticatedPost(serverApp, `${controllerPath}/createNew`, async (req: Request, res: Response) => {
            const { workshopName, password } = req.body;

            const result: CommandResult = await WorkshopService.createWorkshop(workshopName, password);
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
