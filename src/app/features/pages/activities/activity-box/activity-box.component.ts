import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-box',
  templateUrl: './activity-box.component.html',
  styleUrls: ['./activity-box.component.scss']
})
export class ActivityBoxComponent implements OnInit {
	@Input() activity :any;
	public title :string = "";
	public imgUrl :string = "";
	public desc :string = "";
	constructor() { }

	ngOnInit(): void {
		this.imgUrl = this.activity?.image;
		this.title = this.activity?.name;
		this.desc = this.activity?.description;
	}

}
