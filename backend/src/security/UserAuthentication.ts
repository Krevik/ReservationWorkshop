import { Express, Request, Response } from "express";
import { CommandResult } from "../utils/CommandResult";
import { UserFinder } from "../user/UserFinder";
import { UserAuthenticationData, UserService } from "../user/UserService";

export class UserAuthentication {
    private userId?: number;
    private userName?: string;
    private authToken?: string;
    private isAuthenticated: boolean = false;
    private message?: string;

    constructor(req: Request) {
        const { userNameReq, authToken } = req.body;
        this.userName = userNameReq;
        this.authToken = authToken;
    }

    public getIsAuthenticated(): boolean {
        return this.isAuthenticated;
    }

    public getMessage(): string | undefined {
        return this.message;
    }

    public getAuthData(): UserAuthenticationData | undefined {
        return this.getIsAuthenticated() ? { authToken: this.authToken!, userId: this.userId!, userName: this.userName! } : undefined;
    }

    public async checkAuth() {
        if (!this.userName || !this.authToken) {
            this.isAuthenticated = false;
            this.message = "User Name or Auth Token was not given";
            return this;
        }

        const authenticationResult: UserAuthenticationData | null = await UserService.authenticateUserByToken(this.userName, this.authToken);
        if (authenticationResult) {
            this.isAuthenticated = true;
            this.userId = authenticationResult.userId;
        } else {
            this.message = "User authentication data is incorrect";
        }
        return this;
    }
}
