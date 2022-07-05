import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Member } from "src/app/features/interfaces";

@Injectable({
  providedIn: "root",
})
export class MembersService {

  URL: string = 'https://ongapi.alkemy.org/api';

  constructor(private http: HttpClient) {
  }
 
  getAllMembers(): Observable<any> {
    return this.http.get<Member[]>(this.URL + '/members');
  }

  getMember(id: number): Observable<any> {
    return this.http.get<Member>(this.URL + '/members/' + id);
  }

  addMember(member: Member): Observable<any> {
    return this.http.post<Member>(this.URL + '/members', member);
  }

  editMember(id: number, member: Member): Observable<any> {
    return this.http.put<Member>(this.URL + '/members/' + id, member);
  }

  deleteMember(id: number){
    return this.http.delete<Member>(this.URL + '/members/' + id);
  }

}