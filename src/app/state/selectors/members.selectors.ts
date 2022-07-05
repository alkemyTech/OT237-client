import { MembersState } from '../members.state';
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
 
export const selectMembersFeature = (state: AppState) => state.members;
  
export const selectMembersList = createSelector(
  selectMembersFeature,
  (state: MembersState) => state.members
);

export const selectLoading = createSelector(
    selectMembersFeature,
    (state: MembersState) => state.loading
);