import { loadedUsers } from '../../../../../../state/actions/users.action';
import { selectLoading, selectUsersList } from '../../../../../../state/selectors/users.selector';
import { Observable } from 'rxjs';
import { loadUsers } from '../../../../../../state/actions/users.action';
import { UserService } from '../../../../../../core/services/user.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  users$: Observable<any[]> = new Observable();
  usersFilter!: any[];
  search: FormControl = new FormControl('');
  isLoading: boolean = false;
  public loading$: Observable<boolean> = new Observable();

  constructor(
    private userSvc: UserService,
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.users$ = this.store.select(selectUsersList);
    this.listar();
    this.search.valueChanges.pipe(
      map(search => search.toLowerCase().trim()),
      debounceTime(500),
      distinctUntilChanged(),
      tap(search => {
        if(search.length > 0) {
          this.isLoading = true;
          this.userSvc.searchByName(search)
          .subscribe((res: any) => {
            this.usersFilter = res.data;
            this.isLoading = false;
          });
        }else this.users$.subscribe((res) => this.usersFilter = res);
      })
    ).subscribe();
  }

  private listar() {
    this.store.dispatch(loadUsers());
    this.userSvc.getAllUsers(100).subscribe({
      next: (res: any) => {
        this.store.dispatch(loadedUsers({ users: res.data }));
        this.usersFilter = res.data;
      },
      error: (err) => console.log(err)
    });
  }

  deleteUser(user: any) {
    Swal.fire({
      title: `¿Estás seguro de eliminar al usuario ${user.name}?`,
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar'
    }).then((res) => {
      if(res.isConfirmed) {
        this.userSvc.delete(user.id)
          .subscribe({
            next: (res: any) => {
              this.listar();
              Swal.fire({
                title: 'Operación exitosa',
                text: res.message,
                icon: 'success'
              })
            },
            error: (err: any) => console.log(err)
          });
      }
    });
  }

  onAction(type: string, user: any = {}) {
    type=='update' ? this.router.navigateByUrl('/backoffice/users/create', { state: user }) : 
    this.router.navigateByUrl('/backoffice/users/create');
  }

}
