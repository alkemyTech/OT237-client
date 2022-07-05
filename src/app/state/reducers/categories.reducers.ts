import { CategoriesState, MembersState } from '../members.state';
import { createReducer, on } from '@ngrx/store';
import { loadMembers } from '../actions/members.actions';
import { loadedMembers } from '../actions/members.actions';
import { loadCategories, loadedCategories } from '../actions/categories.actions';

export const initialState: CategoriesState = { loading: false, categories: []}

export const categoriesReducer = createReducer(
  initialState,
  on(loadCategories, (state) => { 
    return { ... state, loading: true }
  }),
  on(loadedCategories, (state, {categories}) => { 
    return { ... state, loading: false, categories  }
  })
); 