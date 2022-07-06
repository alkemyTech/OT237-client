import { Member } from '../features/interfaces';

export interface MembersState {
    loading: boolean,
    members: ReadonlyArray<Member>;
}