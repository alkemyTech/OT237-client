import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss']
})
export class ActivityFormComponent implements OnInit {
  title = 'base-ong-angular-client';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    this.router.navigateByUrl('backoffice/users');
  }

  update() {
    let data = {
      id: 132,
      name: "eddie06",
      email: "ejhuancahuire@gmail.com",
      role_id: 2
    };
    this.router.navigateByUrl('backoffice/users', { state: data });
  }

}
