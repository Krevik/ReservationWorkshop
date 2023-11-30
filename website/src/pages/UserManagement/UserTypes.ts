export interface UserDTO {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    role: UserRole;
}

export enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER",
}
