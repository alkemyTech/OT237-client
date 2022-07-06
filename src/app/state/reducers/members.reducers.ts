import { MembersState } from '../members.state';
import { createReducer, on } from '@ngrx/store';
<<<<<<< HEAD
import { loadMembers } from '../actions/members.actions';
import { loadedMembers } from '../actions/members.actions';

export const initialState: MembersState = { loading: false, members: []}
=======
import { loadMembers, loadedMembers } from '../actions/members.actions';

export const initialState: MembersState = { loading: false, members: [] }
>>>>>>> Develop

export const membersReducer = createReducer(
  initialState,
  on(loadMembers, (state) => { 
    return { ... state, loading: true }
  }),
  on(loadedMembers, (state, {members}) => { 
    return { ... state, loading: false, members }
  })
); 