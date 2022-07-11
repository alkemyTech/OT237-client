import { loadUsers, loadedUsers } from '../actions/users.action';
import { createReducer, on } from '@ngrx/store';
import { UsersState } from '../members.state';

export const initialState: UsersState = {
    loading: false,
    users: []
};

export const usersReducer = createReducer(
    initialState,
    on(loadUsers, (state) => {
        return { ...state, loading: true }
    }),
    on(loadedUsers, (state, { users }) => {
        return { 
            ...state, 
            loading: false, 
            users 
        }
    })
);