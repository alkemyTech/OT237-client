import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
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
		console.log("submitted");
		this.submitted = true;
	}
	public isSubmitted() :boolean {
		return this.submitted;
	}
	public requiredError(inputName :string) :boolean | null | undefined{
		return this.orgEditForm.get(inputName)?.errors?.['required'];
	}

	private buildForm() :FormGroup{
		return new FormGroup({
			name: new FormControl('', [
				Validators.required
			]),
			logo: new FormControl('', [
				Validators.required
			]),
			shortDesc: new FormControl('', [
				Validators.required
			]),
			longDesc: new FormControl('', [
				Validators.required
			]),
			linksInput: new FormControl('', [
				Validators.required
			])
		});
	}
}
