import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { routing, appRoutingProviders } from "./app.routing";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { MenuPrincipalComponent } from "./components/menu-principal/menu-principal.component";
import { AlumnosComponent } from "./components/alumnos/alumnos.component";
import { DetallesAlumnosComponent } from "./components/detalles-alumnos/detalles-alumnos.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    AlumnosComponent,
    DetallesAlumnosComponent
  ],
  imports: [BrowserModule, routing, HttpClientModule],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
