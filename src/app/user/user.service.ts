import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ResponseUsers, ResponseCreate, RequestCreate, ResponseUser, RequestUptade, ResponseUptade } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

private url = "https://reqres.in/api/users"

constructor(private http: HttpClient) { }

getUser(): Observable<ResponseUsers>{
 return this.http.get<ResponseUsers>(this.url);
}

postUser(request: RequestCreate): Observable<ResponseCreate>{
  return this.http.post<ResponseCreate>(this.url, request);

}

getOneUser(id: string): Observable<ResponseUser>{
  const _url = `${this.url}/${id}`
  return this.http.get<ResponseUser>(_url);
 }

putUser(id: string, request: RequestUptade): Observable<ResponseUptade>{
  const _url = `${this.url}/${id}`
  return this.http.put<ResponseUptade>(_url, request);
}

deleteUser(id: string): Observable<any>{
  const _url = `${this.url}/${id}`
  return this.http.delete<any>(_url);
}

}

