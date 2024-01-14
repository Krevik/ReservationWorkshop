import { Express, Request, Response } from "express";
import { UserAuthentication } from "../security/UserAuthentication";
export const ExtendedExpres = {
    authenticatedPost: (serverApp: Express, path: string, onAuthSuccess: (reqGiven: Request, resGiven: Response) => void) =>
        serverApp.post(path, async (req: Request, res: Response) => {
            const userAuthentication: UserAuthentication = await new UserAuthentication(req).checkAuth();
            if (!userAuthentication.getIsAuthenticated()) {
                res.send("Invalid user authentication data");
                return;
            }
            onAuthSuccess(req, res);
        }),
};
