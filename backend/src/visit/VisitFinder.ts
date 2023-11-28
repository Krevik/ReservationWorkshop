import { Visit, Workshop } from "@prisma/client";
import { prisma } from "../../index";

export const VisitFinder = {
    findAll: async (): Promise<Visit[]> => await prisma.visit.findMany(),
    findById: async (givenId: number): Promise<Visit | null> => prisma.visit.findUnique({ where: { id: givenId } }),
    findAllByUserId: async (givenUserId: number): Promise<Visit[]> => prisma.visit.findMany({ where: { reserverUserId: givenUserId } }),
    findAllByWorkshopId: async (givenWorkshopId: number): Promise<Visit[]> => prisma.visit.findMany({ where: { workshopId: givenWorkshopId } }),
};
