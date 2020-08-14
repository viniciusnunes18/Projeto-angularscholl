import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private conn: string = environment.LocalDB;
  private collection: string = "usuario";
  constructor(
    private http: HttpClient,
  ) { }

  public add(usuario: Usuario) {
    return this.http.post(this.conn + this.collection, usuario);
  }
}
