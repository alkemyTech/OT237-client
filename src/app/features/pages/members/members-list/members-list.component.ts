import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MembersService } from 'src/app/core/services/members.service';
import { loadMembers } from 'src/app/state/actions/members.actions';
import { AppState } from 'src/app/state/app.state';
import { selectMembersList, selectLoading } from 'src/app/state/selectors/members.selectors';
import { Member } from '../../../interfaces';


@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {

  public members: Member[] = [];
  public loading$: Observable<boolean> = new Observable()

  constructor(
    private store: Store<AppState>,
    private router: Router, 
    private membersService: MembersService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadMembers())
    this.loading$ = this.store.select(selectLoading)
    this.store.select(selectMembersList).subscribe((members: any) => {
      this.members = members.data
    })
  }

  getAllMembers() {
    this.membersService.getAllMembers();
  }

  editMember(id: any){
    this.router.navigate(['backoffice/members/edit/' + id]);
  }

  deleteMember(id: any){
    this.membersService.deleteMember(id)
    .subscribe(
      data =>{
        this.getAllMembers();
      })
    }
}
