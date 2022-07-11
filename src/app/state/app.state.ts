import { usersReducer } from './reducers/users.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { UsersState } from './members.state';

export interface AppState {
    users: UsersState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    users: usersReducer
}