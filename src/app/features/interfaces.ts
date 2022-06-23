export interface Novedad {
    id: number,
    name: string,
    slug: any,
    content: string,
    image: string,
    user_id: number,
    category_id: number,
    created_at: Date|string,
    updated_at: Date|string,
    deleted_at: Date|string,
    group_id: number
}

export interface Novedades {
    success: boolean,
    data: Novedad[],
    message: string
}
