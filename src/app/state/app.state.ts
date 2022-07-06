<<<<<<< HEAD
import { CategoriesState, MembersState } from "../state/members.state";
import { ActionReducerMap } from "@ngrx/store";
import { membersReducer } from './reducers/members.reducers';
import { categoriesReducer } from "./reducers/categories.reducers";

export interface AppState {
    members: MembersState,
    categories:CategoriesState,

}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    members: membersReducer,
    categories: categoriesReducer,
    
}
=======
import { MembersState } from "../state/members.state";
import { ActionReducerMap } from "@ngrx/store";
import { membersReducer } from './reducers/members.reducers';

export interface AppState {
    members: MembersState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    members: membersReducer
} 
>>>>>>> Develop
