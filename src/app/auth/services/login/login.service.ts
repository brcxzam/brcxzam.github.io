import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ReqLogin, ResLogin } from '../../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly httpClient: HttpClient) {}

  login(reqLogin: ReqLogin) {
    return this.httpClient.post<ResLogin>(environment.urlLogin, reqLogin);
  }
}
