import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { University } from '../models/University';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url = environment.base;


@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  private url = `${base_url}/university`;
  private listaCambio = new Subject<University[]>();
  constructor(private http: HttpClient) {}



  insert(i: University) {
    let token = sessionStorage.getItem('token');

    return this.http.post(this.url, i, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  list() {
    let token = sessionStorage.getItem('token');

    return this.http.get<University[]>(this.url,{
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  setList(listaNueva: University[]) {
        let token = sessionStorage.getItem('token');

    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
  update(d: University) {
    let token = sessionStorage.getItem('token');

    return this.http.put(this.url, d,{
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  delete(id: number) {
    let token = sessionStorage.getItem('token');

    return this.http.delete(`${this.url}/delete/${id}`,{
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
}
