import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Injectable()
export class CategoriaEffects {

  loadCategories$ = createEffect(() => this.actions$.pipe(
    ofType('[Category List] Load categories'),
    mergeMap(() => this.categorieService.buscarCategorias("")
      .pipe(
        map(categories => ({ type: '[Category List] Retrieve categories Success', categories})),
        catchError(() => EMPTY)
      ))
    )
  );
  constructor(
    private actions$: Actions,
    private categorieService: CategoriesService,
  ) 
    {} 
}