import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MembersService } from '../../../../core/services/members.service';
import { first } from 'rxjs/operators';
import { Member } from '../../../interfaces';

@Component({
  selector: 'app-members-form',
  templateUrl: './members-form.component.html',
  styleUrls: ['./members-form.component.scss']
})
export class MembersFormComponent implements OnInit {
  form!: FormGroup;
  isAddMode!: boolean;
  isSubmitted!: boolean;
  file!: File;
  Editor = ClassicEditor;
  base64!: string;
  id!: number;
  member: Member = {};

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private membersService: MembersService,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.isSubmitted = false;
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],
      facebookUrl: ['', [Validators.required, Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?")]],
      linkedinUrl: ['', [Validators.required, Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?")]],
    });

    if (!this.isAddMode) {
        this.membersService.getMember(this.id)
          .subscribe({
            next: (data: any) => {
              this.member = data.data
              this.form = this.formBuilder.group({
                name: [this.member.name || '', [Validators.required, Validators.minLength(4)]],
                image: [this.base64, [Validators.required]],
                description: [this.member.description || '', [Validators.required]],
                facebookUrl: [this.member.facebookUrl || '', [Validators.required, Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?")]],
                linkedinUrl: [this.member.linkedinUrl || '', [Validators.required, Validators.pattern("(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?")]],
              });
            },
            error: e => {
              this.router.navigate(["/"]);
            }
      })
    }
  }

  get f() { return this.form.controls; }

  public processImage(files: FileList | null = null): void {
    if (files) {
      this.file = files[0]!;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      this.base64 = (<string>reader.result!);
    };
    reader.readAsDataURL(this.file);
  }

  public handleSubmit(e: Event): void {
    e.preventDefault();
    this.isSubmitted = true;
    this.form.value.image = this.base64;
    
    if (this.form.invalid) {
      return;
    }
    
    this.isAddMode ? this.membersService.addMember(this.form.value).pipe(first())
    .subscribe({
      next: () => {
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    })
  
    : this.membersService.editMember(this.id, this.form.value).pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['../'], { relativeTo: this.route });
        }
    });
  }
}