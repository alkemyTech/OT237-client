import { Component, OnInit } from '@angular/core';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';

@Component({
	selector: 'app-organization-form',
	templateUrl: './organization-form.component.html',
	styleUrls: ['./organization-form.component.scss']
})
export class OrganizationFormComponent implements OnInit {
	public shortDescEditor = ClassicEditorBuild;
	public longDescEditor = ClassicEditorBuild;
	constructor() { }

	ngOnInit(): void {
	}

}
