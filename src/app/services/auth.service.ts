import { Injectable } from '@angular/core';
import { Utilisateur } from '../Models/utilisateur'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import {URL} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  redirectUrl: string;
  isAuth: boolean;
  constructor(private httpClient: HttpClient) { }

  connexion(Utilisateur : Utilisateur): Observable<any> 
  {
    console.log(Utilisateur);
    return this.httpClient.post(URL+'/auth/local',Utilisateur).pipe(); 
  }
  inscription(Utilisateur: Utilisateur) 
  {
    console.log(Utilisateur);
    return this.httpClient.post(URL+'/auth/local/register',Utilisateur).pipe(); 
  }
}
