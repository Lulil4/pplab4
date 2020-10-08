import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleComponent } from "../app/components/presentacion/detalle/detalle.component";
import { ListadoComponent } from "../app/components/logicos/listado/listado.component";
import { NotFoundComponent } from "../app/components/presentacion/not-found/not-found.component";
import { HomeComponent } from "../app/components/presentacion/home/home.component";

const routes: Routes = [
  {
    path: "" && "/",
    component: HomeComponent,
  },
  {
    path: "listado",
    component: ListadoComponent,
  },
  {
    path:"detalle/:pokemon",
    component: DetalleComponent,
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
