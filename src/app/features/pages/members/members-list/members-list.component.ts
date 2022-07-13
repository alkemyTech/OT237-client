import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { MembersService } from 'src/app/core/services/members.service';
import { loadedMembers, loadMembers } from 'src/app/state/actions/members.actions';
import { AppState } from 'src/app/state/app.state';
import { selectMembersList, selectLoading } from 'src/app/state/selectors/members.selectors';
import { Member } from '../../../interfaces';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {

  public members: Member[] = [];
  public loading$: Observable<boolean> = new Observable();

  public searchTerm: string = '';
  public form!: FormGroup;

  constructor(
    private store: Store<AppState>,
    private router: Router, 
    private membersService: MembersService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      searchTerm: [''],
    });
    this.store.dispatch(loadMembers())
    this.loading$ = this.store.select(selectLoading)
    this.store.select(selectMembersList).subscribe((members: any) => {
      this.members = members.data
    })

  }

  get f() { return this.form.controls; }

  getAllMembers() {
    this.membersService.getAllMembers()
    .subscribe((response: Member[]) => {
      this.store.dispatch(loadedMembers(
        { members: response }
      ));
    });

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

  searchMembersByValue(value: string){
    if(value.length > 2){
      this.membersService.searchMembersByValue(value)
      .pipe(
        filter(Boolean),
        debounceTime(150),
        distinctUntilChanged()
      )
      .subscribe((members: any) => {
        this.members = members.data
        console.log(value)
      })
    }
    else{
      this.membersService.getAllMembers()
      .pipe(
        filter(Boolean),
        debounceTime(150),
        distinctUntilChanged()
      )
      .subscribe((members: any) => {
        this.members = members.data
      });
    }
  }

}
