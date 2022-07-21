import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { UsersState } from "../members.state";

export const selectUsersFeature = (state: AppState) => state.users;

export const selectUsersList = createSelector(
    selectUsersFeature,
    (state: UsersState) => state.users
);

export const selectLoading = createSelector(
    selectUsersFeature,
    (state: UsersState) => state.loading
);