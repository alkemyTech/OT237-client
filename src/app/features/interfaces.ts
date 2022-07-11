export interface User {
    id?: number;
    name: string;
    email: string;
    email_verified_at?: string;
    password: string;
    role_id: number;
    remember_token?: string;
    created_at?: Date | string,
    updated_at?: Date | string,
    deleted_at?: Date | string,
    group_id?: number;
    latitude?: string;
    longitude?: string;
    address?: string;
    profile_image?: string;
}

export interface ResponseObject {
    success: boolean,
    data: User,
    message: string
}

export interface ResponseObjectArray {
    success: boolean,
    data: User[],
    message: string
}