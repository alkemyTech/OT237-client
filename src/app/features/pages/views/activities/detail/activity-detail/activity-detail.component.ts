import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivitiesService } from 'src/app/core/services/activities.service';

@Component({
	selector: 'app-activity-detail',
	templateUrl: './activity-detail.component.html',
	styleUrls: ['./activity-detail.component.scss']
})
export class ActivityDetailComponent implements OnInit {
	public title :string = "Titulo";
	public img :string = "";
	public desc :string = "";
	private id !:number;
	constructor(
		private activatedRoute :ActivatedRoute,
		private router :Router,
		private activitiesService :ActivitiesService
	) {

	}

	ngOnInit(): void {
		this.id = this.activatedRoute.snapshot.params.id;
		this.activitiesService.getActivity(this.id).subscribe({
			next: (response :any) => {
				this.title = response.data.name;
				this.img = response.data.image;
				this.desc = response.data.description;
			},
			error: () => {
				this.router.navigate(["/"]);
			}
		});
		
	}

}
