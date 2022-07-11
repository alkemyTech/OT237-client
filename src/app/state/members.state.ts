import { User } from '../features/interfaces';

export interface UsersState {
    loading: boolean,
    users: User[]
}