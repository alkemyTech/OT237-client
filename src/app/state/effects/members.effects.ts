import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MembersService } from '../../core/services/members.service';

@Injectable()
export class MemberEffects {

  loadMembers$ = createEffect(() => this.actions$.pipe(
    ofType('[Member List] Load members'),
    mergeMap(() => this.membersService.getAllMembers()
      .pipe(
        map(members => ({ type: '[Member List] Retrieve members Success', members })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private membersService: MembersService,
  ) {}
} 