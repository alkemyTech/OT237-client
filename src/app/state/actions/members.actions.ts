import { createAction, props } from '@ngrx/store';
import { Member } from '../../features/interfaces';

export const loadMembers = createAction(
   '[Member List] Load members'  
);

export const loadedMembers = createAction(

  '[Member List] Retrieve members Success',
  props<{ members: Member[] }>()
); 

