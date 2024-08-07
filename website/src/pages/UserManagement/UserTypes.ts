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

export interface UserCreationDTO {
    userName: string;
    email: string;
    password: string;
}

export interface UserAuthenticationDTO {
    userName: string;
    hashedPassword: string;
}
