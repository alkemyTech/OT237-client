import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadedMembers } from 'src/app/state/actions/members.actions';
import { loadMembers } from 'src/app/state/actions/members.actions';
import { MembersService } from '../../../../core/services/members.service';
import { selectLoading, selectMembersList } from '../../../../state/selectors/members.selectors';
import { Member } from '../../../interfaces';
import { AppState } from '../../../../state/app.state';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {

  loading$: Observable<boolean> = new Observable()
  members$: Observable<any> = new Observable()

  constructor(private store: Store<AppState>, private router: Router, private membersService: MembersService) { 
  }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.members$ = this.store.select(selectMembersList);
    this.store.dispatch(loadMembers());
    this.getAllMembers();
  }

  getAllMembers() {
    this.membersService.getAllMembers()
    .subscribe((response: Member[]) => {
      this.store.dispatch(loadedMembers(
        { members: response }
      ));
    });
  }

  editMember(id: number){
    this.router.navigate(['backoffice/members/edit/' + id]);
  }

  // deleteMember(id: number){
  //   this.membersService.deleteMember(id)
  //   .subscribe(
  //     data =>{
  //       this.getAllMembers();
  //     })
  //   }
}
