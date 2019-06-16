import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const API = 'http://localhost:3000';

@Injectable({providedIn: 'root'})
export class PhotoService{
  //private torna a váriavel parte da classe.
  //Não precisando injetar do moto convencional
  constructor(private http: HttpClient) {
    this.http = http;
  }

  listFromUser(userName: string){
    return this.http.get<Photo[]>(API + '/flavio/photos');
  }
}
