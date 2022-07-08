import { UserService } from './../../../../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  users: any[] = [];
  usersFilter: any[] = [];
  search: FormControl = new FormControl('');
  isLoading: boolean = false;

  constructor(
    private userSvc: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
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
        }else this.usersFilter = this.users;
      })
    ).subscribe();
  }

  private listar() {
    this.isLoading = true;
    this.userSvc.getAllUsers(100).subscribe({
      next: (res: any) => {
        this.users = res.data;
        this.usersFilter = res.data;
        this.isLoading = false;
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
