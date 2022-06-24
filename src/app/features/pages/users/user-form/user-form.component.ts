import { UserService } from './../../../../core/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

export interface UserFormEditNew {
  id?: number;
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

  constructor(
    private fb: FormBuilder,
    private userSvc: UserService
  ) { }

  ngOnInit(): void {
    history.state ? this.formEdit() : this.initForm();
  }

  async onStore(): Promise<void> {

    if (this.form.status == 'VALID') {
      try {
        if(this.user.id){
          this.update(this.form.value)
        }
        else{
          this.save(this.form.value)
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
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role_id: ['', Validators.required]
    });

    this.user.id = history.state.id;
    this.user.name = history.state.name;
    this.user.email = history.state.email;
    this.user.role_id = history.state.role_id;
    this.form.patchValue(this.user);
  }

  private initForm(): void {
    this.form = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role_id: ['', Validators.required]
    });
  }
}
