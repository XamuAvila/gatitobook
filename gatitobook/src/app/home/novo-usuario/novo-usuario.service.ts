import { environment } from './../../../environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NovoUsuario} from "./novo-usuario";
import {Observable} from "rxjs";

const API = environment.apiURL;
@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private httpClient: HttpClient) {
  }

  cadastraNovoUsuario(novousuario: NovoUsuario): Observable<any> {
    return this.httpClient.post(`${API}/user/signup`, novousuario)
  }

  verificaUsuarioExistente(nomeUsuario:string){
    return this.httpClient.get(`${API}/user/exists/${nomeUsuario}`)
  }
}
