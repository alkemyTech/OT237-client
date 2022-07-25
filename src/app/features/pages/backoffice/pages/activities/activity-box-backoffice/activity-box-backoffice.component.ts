import { Component, Input, Output , OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-activity-box-backoffice',
	templateUrl: './activity-box-backoffice.component.html',
	styleUrls: ['./activity-box-backoffice.component.scss']
})
export class ActivityBoxBackofficeComponent implements OnInit {
	@Input() activity :any;
	@Output() delete = new EventEmitter<number>();
	public title :string = "";
	public createdAt :string = "";
	public imgUrl :string = "";
	public desc :string = "";
	constructor(private router :Router) { }

	editButton() {
		this.router.navigate([`backoffice/activities/edit/${this.activity?.id}`])
	}

	deleteButton() {
		Swal.fire({
			icon: "warning",
			title: "Esta seguro?",
			text: "Esta accion eliminara la actividad",
			confirmButtonText: "Eliminar",
			showCancelButton: true,
			reverseButtons: true
		}).then(res => {
			if(res.isConfirmed == true) {
				this.delete.emit(this.activity?.id);
				Swal.fire({
					icon: "success",
					title: "Hecho!",
					text: "La actividad fue eliminada con exito"
				})
			}
		})
		
	}

	ngOnInit(): void {
		this.imgUrl = this.activity?.image;
		this.title = this.activity?.name;
		this.desc = this.activity?.description;
		let date = new Date(this.activity?.created_at);
		this.createdAt = date.toUTCString();
	}
}
