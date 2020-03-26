import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; //Para extraer lo que queramos

import { AlumnosComponent } from "./components/alumnos/alumnos.component";
import { DetallesAlumnosComponent } from "./components/detalles-alumnos/detalles-alumnos.component";

const appRoutes: Routes = [
  { path: "", component: AlumnosComponent },
  { path: "listagrado/:curso", component: AlumnosComponent },
  { path: "detallesalumno/:codigo", component: DetallesAlumnosComponent },
  {
    path: "listagrado/:curso/detallesalumno/:codigo",
    component: DetallesAlumnosComponent
  }
  //listagrado/3/detallesalumno/1
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
