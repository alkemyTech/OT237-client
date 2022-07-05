import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
	private activitiesURL = "https://ongapi.alkemy.org/api/activities";
	constructor(private http :HttpClient) {}

	public getActivities() {
		return this.http.get(this.activitiesURL);
	}
	public getActivity(id :number) {
		return this.http.get(this.activitiesURL + "/" + id);
	}
}
