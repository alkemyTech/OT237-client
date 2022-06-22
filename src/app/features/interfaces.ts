export interface Novedad {
    id: any,
    name: any,
    slug: any,
    content: any,
    image: any,
    user_id: any,
    category_id: any,
    created_at: any,
    updated_at: any,
    deleted_at: any,
    group_id: any
}

export interface News {
    success: boolean,
    data: Novedad[],
    message: string
}

export interface Response {
    success: boolean,
    data: Novedad,
    message: string
}

