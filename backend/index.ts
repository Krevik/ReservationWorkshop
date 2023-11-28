import { Application, Express, Request, Response } from "express";
import express = require("express");
import bodyParser = require("body-parser");
import { PrismaClient } from "@prisma/client";
import cors = require("cors");
import { UserControllerService } from "./src/user/UserController";

export const prisma = new PrismaClient();
const serverApp: Express = express();

serverApp.use(
    cors({
        origin: "http://localhost:5173",
        methods: "GET,POST,PUT,DELETE",
        allowedHeaders: "Content-Type,Authorization",
    }),
);
serverApp.use(bodyParser.json());
serverApp.use(bodyParser.urlencoded({ extended: true }));

UserControllerService.registerUserController(serverApp);

serverApp.get("/", (req: Request, res: Response) => {
    res.send("I am up and running");
});

const PORT = process.env.PORT || 8124;
serverApp.listen(PORT, async () => {
    console.log(`Server is setting up on PORT ${PORT}`);
    // await dbUtils.testDBConnection();
    console.log(`Initial setup finished`);
});
