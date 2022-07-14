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

export interface Novedad {
    id?: number,
    name?: string,
    slug?: any,
    content?: string,
    image?: string,
    user_id?: number,
    category_id?: number,
    created_at?: Date|string,
    updated_at?: Date|string,
    deleted_at?: Date|string,
    group_id?: number
}

export interface Category {
    id?: number,
    name?: string,
    description?: string,
    image?: string,
    parent_category_id?: number,
    created_at?: Date|string,
    updated_at?: Date|string,
    deleted_at?: Date|string,
    group_id?: number
}

export interface Member {
    id?: number,
    name?: string,
    image?: string,
    description?: string,
    facebookUrl?: string,
    linkedinUrl?: string,
    created_at?: Date|string,
    updated_at?: Date|string,
    deleted_at?: Date|string
}

export interface Contact {
    id?: number,
    name?: string,
    email?: string,
    phone?: string,
    message?: string,
    deleted_at?: Date|string,
    created_at?: Date|string,
    updated_at?: Date|string
}

export interface ResponseObject {
    success: boolean,
    data: Novedad|User,
    message: string
}

export interface ResponseObjectArray {
    success: boolean,
    data: Novedad[]|Category[]|User[],
    message: string
}