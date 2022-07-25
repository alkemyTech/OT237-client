import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, ValidationErrors, ValidatorFn, AbstractControl} from '@angular/forms';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import {Router, ActivatedRoute} from '@angular/router';
import {ActivitiesService} from 'src/app/core/services/activities.service';
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-activity-form',
	templateUrl: './activity-form.component.html',
	styleUrls: ['./activity-form.component.scss']
})
export class ActivityFormComponent implements OnInit {
	public descEditor = ClassicEditorBuild;
	public activityEditForm :FormGroup;
	public submit ?:any;
	public image :string = "";

	constructor(
		private router :Router,
		private http :HttpClient,
		private activatedRoute :ActivatedRoute,
		private activityService :ActivitiesService
	) {
		this.activityEditForm = this.buildForm();
	}

	public requiredError(inputName :string) :boolean | null | undefined{
		return this.activityEditForm.get(inputName)?.errors?.['required'];
	}
	public fileError(inputName :string) :boolean | null | undefined {
		return this.activityEditForm.get(inputName)?.errors?.['fileInvalid'];
	}
	public touched(input :string) :boolean | null | undefined{
		return this.activityEditForm.get(input)?.touched;
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
			image: new FormControl('', [
				Validators.required,
				this.fileValidation()
			]),
			desc: new FormControl('', [
				Validators.required
			]),
		});
	}
	private convertImage(file :File) :Observable<string> {
		const result = new ReplaySubject<string>(1);
		const reader = new FileReader();
		reader.readAsBinaryString(file);
		reader.onload = (loaded) => {
			result.next(btoa(loaded.target?.result?.toString() || ""));
		}
		return result;
	}
	public processImage(event :any) {
		const file :File = event.target.files[0];
		if(file) {
			this.convertImage(file).subscribe(res => {
				this.image = res;
			})
		}
	}

	private createActivity() {
		let response = {
			name: this.activityEditForm.get('name')?.value,
			description: this.activityEditForm.get('desc')?.value
		}
		if(this.activityEditForm.get('image')?.value == "") {
			return response;
		} else {
			return {
				image: "data:imagen/jpeg;base64," + this.image,
				...response
			}
		}
	}

	private put() :void{
		if(!this.activityEditForm.invalid) {
			this.activityService.putActivity(this.createActivity(), this.activatedRoute.snapshot.params.id)
			.subscribe((res:any) => {
				if(res?.success == true) {
					this.router.navigate(["backoffice/activities/list"])	
				} else {
					console.log(res);
				}
			});
		}
	}
	private post() :void{
		if(!this.activityEditForm.invalid) {
			this.activityService.postActivity(this.createActivity())
			.subscribe((res:any) => {
				if(res?.success == true) {
					this.router.navigate(["backoffice/activities/list"])	
				} else {
					console.log(res);
				}
			});
		}
	}
	ngOnInit(): void {
		let id = this.activatedRoute.snapshot.params.id;
		if(id == "create") {
			this.submit = this.post;
		} else {
			this.activityService.getActivity(id).subscribe({
				next: (response :any) => {
					this.activityEditForm.setValue({
						name: response.data.name,
						image: "",
						desc: response.data.description
					})
					this.activityEditForm.get("image")?.clearValidators();
					this.activityEditForm.get("image")?.updateValueAndValidity();
					this.submit = this.put;
				},
				error: () => {
					this.router.navigate(["/"]);
				}
			});
		}
	}
}



