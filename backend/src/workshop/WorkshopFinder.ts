import { prisma } from "../../index";

export interface WorkshopDTO {
    id: number;
    name: string;
    ownerId: number;
}

export const WorkshopFinder = {
    findAll: async (): Promise<WorkshopDTO[]> => await prisma.workshop.findMany(),
    findById: async (givenId: number): Promise<WorkshopDTO | null> => prisma.workshop.findUnique({ where: { id: givenId } }),
    findAllByOwnerId: async (ownerUserId: number): Promise<WorkshopDTO[]> => prisma.workshop.findMany({ where: { ownerId: ownerUserId } }),
    findByName: async (workshopName: string): Promise<WorkshopDTO | null> => prisma.workshop.findUnique({ where: { name: workshopName } }),
};
