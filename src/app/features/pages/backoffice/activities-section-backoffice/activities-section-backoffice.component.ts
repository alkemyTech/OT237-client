import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivitiesService } from 'src/app/core/services/activities.service';

@Component({
	selector: 'app-activities-section-backoffice',
	templateUrl: './activities-section-backoffice.component.html',
	styleUrls: ['./activities-section-backoffice.component.scss']
})
export class ActivitiesSectionBackofficeComponent implements OnInit {
	public activities :Array<any> = [];
	constructor(
		private router :Router,
		private activitiesService :ActivitiesService
	) { }
	
	public createActivity() :void{
		this.router.navigate(["backoffice/activities/create"]);
	}
	public deleteActivity(id :number) :void {
		this.activitiesService.delActivity(id).subscribe(res => {
			console.log(res);
			this.loadActivities();
		});
	}

	private loadActivities() :void{
		this.activitiesService.getActivities().subscribe({
			next: (response :any) => {
				this.activities = response?.data;
			}
		})
	}

	ngOnInit(): void {
		this.loadActivities();
	}

}
