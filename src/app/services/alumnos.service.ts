import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Global } from "./global";

@Injectable()
export class AlumnoService {
  private url: string;
  constructor(private _http: HttpClient) {
    this.url = Global.urlalumnos;
  }
  getAlumnos(): Observable<any> {
    var peticion = "/Alumnos";
    console.log("PETICION ALUMMNOS:" + this.url + peticion);
    return this._http.get(this.url + peticion);
  }

  getAlumnosCurso(curso): Observable<any> {
    var peticion = "/alumnos/getalumnosGrado/" + curso;
    console.log("PETICION ALUMMNOS GRADO:" + this.url + peticion);
    return this._http.get(this.url + peticion);
  }

  getDetallesAlumno(codigo): Observable<any> {
    var peticion = "/alumnos/detallesAlumno/" + codigo;
    console.log("PETICION DETALLES ALUMNO:" + this.url + peticion);
    return this._http.get(this.url + peticion);
  }
  getCursos(): Observable<any> {
    var peticion = "/alumnos/getGrados";
    console.log("PETICION GRADOS:" + this.url + peticion);
    return this._http.get(this.url + peticion);
  }
}
