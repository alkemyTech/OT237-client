import { User } from '../../features/interfaces';
import { createAction, props } from "@ngrx/store";

export const loadUsers = createAction(
    '[User List] Load users'
);

export const loadedUsers = createAction(
    '[User List] Retrieve users success',
    props<{ users: User[] }>()
);