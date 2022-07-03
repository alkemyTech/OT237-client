import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Member } from "src/app/features/interfaces";
import { HttpService } from './http.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: "root",
})
export class MembersService {

  constructor(private httpService: HttpService) {
  }

  getAllMembers(): Observable<any> {
    return this.httpService.get<Member[]>(environment.url + 'members');
  }

  getMember(id: number): Observable<any> {
    return this.httpService.get<Member>(environment.url + 'members/' + id);
  }

  addMember(member: Member): Observable<any> {
    return this.httpService.post<Member>(environment.url + 'members', false, member);
  }

  editMember(id: number, member: Member): Observable<any>{
    return this.httpService.put<Member>(environment.url + 'members/' + id, false, member);
  }

  deleteMember(id: number){
    return this.httpService.delete<Member>(environment.url + 'members/' + id);
  }

}