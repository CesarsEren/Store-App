import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EditorComponent } from "./template/editor/editor.component";
import { AcercadeComponent } from "./view/acercade/acercade.component";
import { InicioComponent } from "./view/inicio/inicio.component";
import { OfertasComponent } from "./view/ofertas/ofertas.component";
import { ProductoComponent } from "./view/producto/producto.component";
import { TiendaComponent } from "./view/tienda/tienda.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/inicio",
    pathMatch: "full",
  },
  {
    path: "inicio",
    component: InicioComponent,
  },
  {
    path: "tienda",
    component: TiendaComponent,
  },
  {
    path: "tienda/:id",
    component: ProductoComponent,
  },
  {
    path: "ofertas",
    component: OfertasComponent,
  },
  {
    path: "acerca",
    component: AcercadeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
