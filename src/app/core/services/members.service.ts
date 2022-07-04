import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Member } from "src/app/features/interfaces";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: "root",
})
export class MembersService {

  constructor(private http: HttpClient) {
  }

  getAllMembers(): Observable<any> {
    return this.http.get<Member[]>(environment.url + 'members');
  }

  getMember(id: number): Observable<any> {
    return this.http.get<Member>(environment.url + id);
  }

  addMember(member: Member): Observable<any> {
    return this.http.post<Member>(environment.url + 'members', member);
  }

  editMember(id: number, member: Member): Observable<any> {
    return this.http.put<Member>(environment.url + 'members/' + id, member);
  }

  deleteMember(id: number){
    return this.http.delete<Member>(environment.url + 'members/' + id);
  }

}