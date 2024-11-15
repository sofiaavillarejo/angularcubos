import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import axios from "axios";

@Injectable()
export class ServiceCubos {
  getCubos(): Promise<any>{
    const url = `${environment.urlApi}/api/cubos`;
    return axios.get(url).then(response => response.data)
  }

  findCubo(id: number): Promise<any>{
    const url = `${environment.urlApi}/api/cubos/${id}`;
    return axios.get(url).then(response => response.data)
  }

  getComentarios(id: number): Promise<any>{
    const url = `${environment.urlApi}/api/ComentariosCubo/GetComentariosCubo/${id}`;
    return axios.get(url).then(response => response.data)
  }

  getMarcas(): Promise<any>{
    const url = `${environment.urlApi}/api/Cubos/Marcas`;
    return axios.get(url).then(response => response.data)
  }

  getCubosMarca(marca: string): Promise<any>{
    const url = `${environment.urlApi}api/Cubos/CubosMarca/${marca}`;
    return axios.get(url).then(response => response.data)
  }

  comprarCubo(id: number): Promise<any>{
    const url = `${environment.urlApi}api/compra/insertarpedido/${id}`;
    const token = localStorage.getItem('token');
    const headers = { 'Authorization': `Bearer ${token}` };
    return axios.post(url, null, {headers}).then(response => response.data)  
  }
}