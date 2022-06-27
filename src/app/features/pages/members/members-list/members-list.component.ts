import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembersService } from '../../../../core/services/members.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {

  memberList!: any;

  constructor(private router: Router, private membersService: MembersService) { 
  }

  ngOnInit(): void {
    this.memberList = [];
    this.getAllMembers();
  }

  getAllMembers() {
    this.membersService.getAllMembers().subscribe(response => {
      this.memberList = response.data;
    });
  }

  editMember(id: number){
    this.router.navigate(['backoffice/members/edit/' + id]);
  }

  deleteMember(id: number){
    this.membersService.deleteMember(id)
    .subscribe(
      data =>{
        this.getAllMembers();
      })
    }
}
