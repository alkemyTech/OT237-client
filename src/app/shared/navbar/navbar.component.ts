import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() items!: any[];
  @Input() isLogged!: boolean;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.router.navigate(['/login']);
  }

  onHome() {
    this.router.navigate(['/']);
  }

  close(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
