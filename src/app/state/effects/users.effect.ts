import { UserService } from './../../core/services/user.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private usersSvc: UserService
    ) {}
    
    loadUsers$ = createEffect(() => this.actions$.pipe(
        ofType('[User List] Load users'),
        mergeMap(() => this.usersSvc.getAllUsers(100)
            .pipe(
                map(users => ({ type: '[User List] Retrieve users success', users })),
                catchError(() => EMPTY)
            )
        )
    ));
}