import { MembersState } from "../state/members.state";
import { ActionReducerMap } from "@ngrx/store";
import { membersReducer } from './reducers/members.reducers';

export interface AppState {
    members: MembersState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    members: membersReducer
} 