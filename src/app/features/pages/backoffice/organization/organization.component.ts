import { Component, OnInit } from '@angular/core';
import { OrganizationService } from 'src/app/core/services/organization.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-organization',
	templateUrl: './organization.component.html',
	styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
	public id! :number;
	public name :string = "";
	public img :string = "";
	public shortDesc :string = "";
	constructor(
		private organizationService :OrganizationService,
		private router :Router,
		private activatedRoute :ActivatedRoute
	) {
	}

	goToEdit() {
		this.router.navigate(["backoffice/organization/edit"]);
	}

	ngOnInit(): void {
		this.id = this.activatedRoute.snapshot.params.id
		this.organizationService.getOne(this.id).subscribe({
			next: (responseData :any) => {
				this.name = responseData.data.name;
				this.shortDesc = responseData.data.short_description;
				this.img = responseData.data.logo;
			},
			error: () => {
				this.router.navigate(["/"]);
			}
		});
	}

}
