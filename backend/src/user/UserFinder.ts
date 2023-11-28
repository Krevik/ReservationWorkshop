import { prisma } from "../../index";
import { User, UserRole } from "@prisma/client";

export type UserDTO = {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    role: UserRole;
};

const userSelector = {
    id: true,
    name: true,
    email: true,
    createdAt: true,
    role: true,
};

export const UserFinder = {
    findAll: async (): Promise<UserDTO[]> => await prisma.user.findMany({ select: userSelector }),
    findById: async (givenId: number): Promise<UserDTO | null> => prisma.user.findUnique({ where: { id: givenId }, select: userSelector }),
    findByName: async (givenName: string): Promise<UserDTO | null> => prisma.user.findUnique({ where: { name: givenName }, select: userSelector }),
};
