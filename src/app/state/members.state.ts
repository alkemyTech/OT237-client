import { Category, Member, User } from '../features/interfaces';

export interface MembersState {
    loading: boolean,
    members: ReadonlyArray<Member>;
}

export interface CategoriesState {
    loading: boolean,
    categories: ReadonlyArray<Category>;
}

export interface UsersState {
    loading: boolean,
    users: User[]
}