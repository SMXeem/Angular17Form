import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../assets/user';

@Injectable({
  providedIn: 'root'
})
export class AngularFormService {

  _url='';
  constructor(private _http: HttpClient) { }
  insert(user: User){
    return this._http.post<any>(this._url,user);
  }
}
