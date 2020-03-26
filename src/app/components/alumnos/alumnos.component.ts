import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { Alumno } from "./../../models/alumno";
import { AlumnoService } from "./../../services/alumnos.service";

@Component({
  selector: "app-alumnos",
  templateUrl: "./alumnos.component.html",
  styleUrls: ["./alumnos.component.css"],
  providers: [AlumnoService]
})
export class AlumnosComponent implements OnInit {
  public alumnos: Array<Alumno>;
  constructor(
    private _service: AlumnoService,
    private _route: ActivatedRoute
  ) {}

  cargarAlumnos() {
    this._service.getAlumnos().subscribe(
      response => {
        this.alumnos = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  cargarAlumnosCursos(curso) {
    this._service.getAlumnosCurso(curso).subscribe(
      response => {
        this.alumnos = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      if (params.curso != null) {
        this.cargarAlumnosCursos(params.curso);
      } else {
        this.cargarAlumnos();
      }
    });
  }
}
