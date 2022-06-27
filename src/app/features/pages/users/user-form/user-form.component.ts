import { RoleService } from './../../../../core/services/role.service';
import { UserService } from './../../../../core/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

export interface UserFormEditNew {
  name: string;
  email: string;
  role_id?: number;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  form!: FormGroup;
  user!: UserFormEditNew;
  roles!: any[];
  id!: number;

  constructor(
    private fb: FormBuilder,
    private userSvc: UserService,
    private roleSvc: RoleService
  ) { }

  ngOnInit(): void {
    history.state.id ? this.formEdit() : this.initForm();
    this.roleSvc.getAllRoles().subscribe({
      next: (res: any) => {
        this.roles = res.data;
      }
    });
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get role_id() {
    return this.form.get('role_id');
  }

  checkControl(control: any, type: string): boolean {
    return control.hasError(type) && (control.touched || control.dirty);
  }

  async onStore(): Promise<void> {

    if (this.form.status == 'VALID') {
      try {
        if(this.id){
          console.log("update");
          //this.update(this.form.value)
        }
        else {
          console.log("save");
          //this.save(this.form.value)
        }

      } catch (error) {
        console.log("Ocurrió un error");
        //this.toastSvc.error('Ocurrio un Error!');
      } finally {
      }

    } else {
      console.log("Todos los campos requeridos");
      //this.toastSvc.info('Los campos son requeridos', 'Info');
    }

  }

  async update(form: UserFormEditNew){
    return this.userSvc.update(form).subscribe({
      next: (res: any) => {
        if (res.success) {
          console.log('Usuario actualizado!', res.data);
          /* this.toastSvc.success('Bien Hecho! Registro Grabado Correctamente!'); */
        } else {
          console.log('Intentelo Nuevamente!');
          /* this.toastSvc.info('Intentelo Nuevamente!', 'Info'); */
        }
      }
    });
  }

  async save(form: UserFormEditNew){
    return this.userSvc.save(form).subscribe({
      next: (res: any) => {
        if (res.success) {
          console.log("Usuario grabado!", res.data);
          /* this.toastSvc.success('Bien Hecho! Registro Grabado Correctamente!'); */
        } else {
          console.log('Intentelo Nuevamente!');
          /* this.toastSvc.info('Intentelo Nuevamente!', 'Info'); */
        }
      }
    });
  }

  private formEdit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required, Validators.minLength(4)],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      role_id: ['', Validators.required]
    });
    this.id = history.state.id;
    const { name, email, role_id } = history.state;
    this.user = { name, email, role_id };
    this.form.patchValue(this.user);
  }

  private initForm(): void {
    this.form = this.fb.group({
      name: ['', Validators.required, Validators.minLength(4)],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      role_id: ['', Validators.required]
    });
  }
}
