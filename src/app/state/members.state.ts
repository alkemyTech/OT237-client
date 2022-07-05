import { Category, Member } from '../features/interfaces';

export interface MembersState {
    loading: boolean,
    members: ReadonlyArray<Member>;
}

export interface CategoriesState {
    loading: boolean,
    categories: ReadonlyArray<Category>;
}