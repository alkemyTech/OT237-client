import { createAction, props } from '@ngrx/store';
import { Category } from '../../features/interfaces';


export const loadCategories = createAction(
   '[Category List] Load categories'  
);

export const loadedCategories= createAction(
  '[Category List] Retrieve categories Success',
  props<{ categories: Category[] }>()
);


