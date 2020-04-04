import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Plat } from '../Models/plat';
import { URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  token = window.localStorage.getItem('token');;

  constructor(private httpClient : HttpClient) { }

  postPlat(plat : Plat): Observable<Plat> {
    return this.httpClient.post<Plat>(URL + "/Plats",plat,{
      headers: {
        //Authorization: `Bearer ${this.token}`,
      },}).pipe();
  }
  getPlats():Observable<Plat[]>
  {
    return this.httpClient.get<Plat[]>(URL+"/Plats").pipe();
  }

  getPlat(id :number):Observable<Plat>
  {
    return this.httpClient.get<Plat>(URL+'/Plats/'+id).pipe();
  }

  deletePlat(id : number)
  {
    return this.httpClient.delete(URL+'/Plats/'+id,{
      headers: {
        Authorization: `Bearer ${this.token}`,
      },}).pipe();
  }
  

 updatePlat(id : number, plat) : Observable <Plat>
  {
    return this.httpClient.put<Plat>(URL+'/Plats/'+id, plat,{
      headers: {
        Authorization: `Bearer ${this.token}`,
      },}).pipe();
  }

}
