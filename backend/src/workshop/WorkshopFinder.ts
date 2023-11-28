import { User, Workshop } from "@prisma/client";
import { prisma } from "../../index";

export const WorkshopFinder = {
    findAll: async (): Promise<Workshop[]> => await prisma.workshop.findMany(),
    findById: async (givenId: number): Promise<Workshop | null> => prisma.workshop.findUnique({ where: { id: givenId } }),
    findAllByOwnerId: async (ownerUserId: number): Promise<Workshop[]> => prisma.workshop.findMany({ where: { ownerId: ownerUserId } }),
};
