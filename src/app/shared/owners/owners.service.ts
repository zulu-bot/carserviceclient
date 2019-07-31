import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnersService {
  public API2 = 'https://thawing-chamber-47973.herokuapp.com/owner?dni=';
  public API = 'https://thawing-chamber-47973.herokuapp.com/owners';

  constructor(private http: HttpClient) {
   }

   getAll(): Observable<any> {
    return this.http.get(this.API);
  }

  get(dni: string){
    return this.http.get(this.API2 + dni);
  }

  save(owner: any): Observable<any> {
    let result: Observable<Object>;
    if (owner['href']) {
      result = this.http.put(owner.href, owner);
    } else {
      result = this.http.post(this.API, owner);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
