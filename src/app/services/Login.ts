import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import axios from "axios";
import { Usuario } from "../models/Usuario";

@Injectable()
export class ServiceLogin {
  getToken(user: Usuario): Promise<any>{
    const url = `${environment.urlApi}/api/manage/login`;
    return axios.post(url, user).then(response => response.data.response)
  }

  getPerfil(): Promise<any>{
    const url = `${environment.urlApi}/api/manage/perfilusuario`;
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `Bearer ${token}` };
    return axios.get(url, {headers}).then(response => response.data)
  }

  getCompras(){
    const url = `${environment.urlApi}/api/compra/comprasusuario`;
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `Bearer ${token}` };
    return axios.get(url, {headers}).then(response => response.data)
  }
}