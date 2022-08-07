import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NovoUsuario} from "./novo-usuario";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private httpClient: HttpClient) {
  }

  cadastraNovoUsuario(novousuario: NovoUsuario): Observable<any> {
    return this.httpClient.post('http://localhost:3000/user/signup', novousuario)
  }

  verificaUsuarioExistente(nomeUsuario:string){
    return this.httpClient.get(`http://localhost:3000/user/exists/${nomeUsuario}`)
  }
}
