import { Component, OnInit } from "@angular/core";

import { AlumnoService } from "./../../services/alumnos.service";

@Component({
  selector: "app-menu-principal",
  templateUrl: "./menu-principal.component.html",
  styleUrls: ["./menu-principal.component.css"],
  providers: [AlumnoService]
})
export class MenuPrincipalComponent implements OnInit {
  public cursos: Array<number>;

  cargarCursos() {
    this._service.getCursos().subscribe(
      response => {
        this.cursos = response;
      },
      error => {
        console.log(error);
      }
    );
  }
  constructor(private _service: AlumnoService) {
    this.cursos = [];
    this.cargarCursos();
  }

  ngOnInit(): void {}
}
