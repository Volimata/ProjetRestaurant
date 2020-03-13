import { Injectable } from '@angular/core';
import { Plat } from '../Models/plat';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  constructor(private http:HttpClient) { }

  add (plat: Plat): Observable<Plat>{
      return this.http.post<Plat>('http://localhost:1337/plats/',plat ).pipe();

  };
  delete(id: number): Observable<Plat>{
    
    return  this.http.delete<Plat>('http://localhost:1337/plats/'+ id ).pipe();

  };
  update(plat: Plat): Observable<Plat>{
    return this.http.put<Plat>('http://localhost:1337/plats/'+plat.id, plat).pipe();

  };
  get(id: number): Observable<Plat>{
    return this.http.get<Plat>('http://localhost:1337/plats/'+ id ).pipe();

  };
  getAll(): Observable<Plat[]>{
    return this.http.get<Plat[]>('http://localhost:1337/plats').pipe();
   

  }
}
