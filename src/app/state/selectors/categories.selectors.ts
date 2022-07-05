import { CategoriesState } from '../members.state';
import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
 
export const selectCategoriesFeature = (state: AppState) => state.categories;
  
export const selectCategoriesList = createSelector(
  selectCategoriesFeature,
  (state: CategoriesState) => state.categories
);
export const selectLoading = createSelector(
    selectCategoriesFeature,
    (state: CategoriesState) => state.loading
);