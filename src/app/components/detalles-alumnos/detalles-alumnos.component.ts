import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { Alumno } from "./../../models/alumno";
import { AlumnoService } from "./../../services/alumnos.service";

@Component({
  selector: "app-detalles-alumnos",
  templateUrl: "./detalles-alumnos.component.html",
  styleUrls: ["./detalles-alumnos.component.css"],
  providers: [AlumnoService]
})
export class DetallesAlumnosComponent implements OnInit {
  public alumno: Alumno;

  constructor(
    private _service: AlumnoService,
    private _route: ActivatedRoute
  ) {}

  bucarAlumno(codigo) {
    this._service.getDetallesAlumno(codigo).subscribe(
      response => {
        this.alumno = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.bucarAlumno(params.codigo);
    });
  }
}
