import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/core/services/activities.service';
import { ActivityBoxComponent} from "src/app/features/pages/activities/activity-box/activity-box.component";

@Component({
  selector: 'app-activity-section',
  templateUrl: './activity-section.component.html',
  styleUrls: ['./activity-section.component.scss']
})
export class ActivitySectionComponent implements OnInit {
	public activities :Array<any> = [];
	constructor(private activitiesService :ActivitiesService) {}

	ngOnInit(): void {
  		this.activitiesService.getActivities().subscribe({
			next: (response :any) => {
				this.activities = response?.data;
			}
		})
	}

}
