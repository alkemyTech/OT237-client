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

  searchMembersByValue(value: string): Observable<any> {
    return this.httpService.get<Member[]>(`${environment.url}members?search=${value}`);
  }

  addMember(member: Member): Observable<any> {
    return this.httpService.post<Member>(environment.url + 'members', member);
  }

  editMember(id: number, member: Member): Observable<any>{
    return this.httpService.put<Member>(environment.url + 'members/' + id, member);
  }

  deleteMember(id: number): Observable<any>{
    return this.httpService.delete<Member>(environment.url + 'members/' + id);
  }

}