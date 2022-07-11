import { usersReducer } from './reducers/users.reducer';

import { CategoriesState, MembersState, UsersState } from "../state/members.state";
import { ActionReducerMap } from "@ngrx/store";
import { membersReducer } from './reducers/members.reducers';
import { categoriesReducer } from "./reducers/categories.reducers";

export interface AppState {
    members: MembersState,
    categories:CategoriesState,
    users: UsersState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    members: membersReducer,
    categories: categoriesReducer,  
    users: usersReducer
}
