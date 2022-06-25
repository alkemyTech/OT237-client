import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors} from '@angular/forms'
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';


@Component({
	selector: 'app-organization-form',
	templateUrl: './organization-form.component.html',
	styleUrls: ['./organization-form.component.scss']
})
export class OrganizationFormComponent implements OnInit {
	public shortDescEditor = ClassicEditorBuild;
	public longDescEditor = ClassicEditorBuild;
	public orgEditForm :FormGroup;
	public submitted :boolean;
	constructor() {
		this.orgEditForm = this.buildForm();
		this.submitted = false;
	}

	ngOnInit(): void {

	}
	public submit() :void{
		this.submitted = true;
	}
	public isSubmitted() :boolean {
		return this.submitted;
	}
	public requiredError(inputName :string) :boolean | null | undefined{
		return this.orgEditForm.get(inputName)?.errors?.['required'];
	}
	public urlError(inputName :string) :boolean | null | undefined {
		return this.orgEditForm.get(inputName)?.errors?.['url'];
	}
	public patternError(inputName :string) :boolean | null | undefined {
		return this.orgEditForm.get(inputName)?.errors?.pattern;
	}
	public fileError(inputName :string) :boolean | null | undefined {
		return this.orgEditForm.get(inputName)?.errors?.['fileInvalid'];
	}


	private fileValidation() :ValidatorFn{
		return (control :AbstractControl) :ValidationErrors | null =>{
			const pathArr :Array<string> = control.value.split(".");
			const ext :string = pathArr[pathArr.length - 1];
			if(ext == "png" || ext == "jpg"){
				return null;
			} else {
				return {fileInvalid: true};
			}
		}
	}
	private buildForm() :FormGroup{
		return new FormGroup({
			name: new FormControl('', [
				Validators.required
			]),
			logo: new FormControl('', [
				Validators.required,
				this.fileValidation()
			]),
			shortDesc: new FormControl('', [
				Validators.required
			]),
			longDesc: new FormControl('', [
				Validators.required
			]),
			linksInput: new FormControl([], [
				Validators.required
			])
		});
	}
}
