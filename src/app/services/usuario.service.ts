import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  url:string='https://localhost:44373/api/Usuario/Usuarios';
  getUsuario(){
    return this.http.get(this.url);
  }



}


