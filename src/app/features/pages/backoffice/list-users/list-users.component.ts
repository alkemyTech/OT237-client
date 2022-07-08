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
      filter(search => search.length > 2),
      tap(search => {
        this.isLoading = true;
        this.userSvc.searchByName(search)
        .subscribe((res: any) => {
          console.log(res);
          this.isLoading = false;
        });
      })
    ).subscribe();
  }

  private listar() {
    this.userSvc.getAllUsers(100).subscribe({
      next: (res: any) => this.users = res.data,
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
