import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { RoleService } from 'src/app/core/services/role.service';

export interface UserFormEditNew {
  name: string;
  email: string;
  password: string;
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
  base64Image!: string;
  typeImage!: string;

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

  get f() {
    return this.form.controls;
  }

  checkControlByType(control: any, type: string): boolean {
    return control.hasError(type) && (control.touched || control.dirty);
  }

  isValidControl(control: any): boolean {
    return control.invalid && (control.touched || control.dirty);
  }

  onFileChange(files: FileList | null) {
    if(files) {
      this.typeImage = files[0].type.split('/')[1];
      let reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(files[0]);
    }
  }

  private _handleReaderLoaded(readerEvt: any): void {
    let binaryString = readerEvt.target.result;
    this.base64Image= btoa(binaryString);
  }

  async onStore(): Promise<void> {

    if (this.form.status == 'VALID') {
      try {
        if(this.id){
          this.update(this.form.value)
        }
        else {
          this.save(this.form.value);
        }

      } catch (error) {
        console.log("Ocurrió un error");
      } finally {
      }

    } else {
      console.log("Todos los campos requeridos");
    }

  }

  async update(form: UserFormEditNew){
    return this.userSvc.update(form).subscribe({
      next: (res: any) => {
        if (res.success) {
          console.log('Usuario actualizado!', res.data);
        } else {
          console.log('Intentelo Nuevamente!');
        }
      }
    });
  }

  async save(form: UserFormEditNew){
    let imageToBase64 = `data:imagen/${this.typeImage};base64,${this.base64Image}`;
    return this.userSvc.save({ ...form, profile_image: imageToBase64 }).subscribe({
      next: (res: any) => {
        if (res.success) {
          console.log("Usuario grabado!", res.data);
        } else {
          console.log('Intentelo Nuevamente!');
        }
      }
    });
  }

  private formEdit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', Validators.required],
      role_id: ['', Validators.required],
    });
    this.id = history.state.id;
    const { name, email, password, role_id } = history.state;
    this.user = { name, email, password, role_id };
    this.form.patchValue(this.user);
  }

  private initForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', Validators.required],
      role_id: ['', Validators.required],
    });
  }
}
