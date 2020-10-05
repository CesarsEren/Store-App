import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./template/header/header.component";
import { FooterComponent } from "./template/footer/footer.component";
import { InicioComponent } from "./view/inicio/inicio.component";
import { TiendaComponent } from "./view/tienda/tienda.component";
import { OfertasComponent } from "./view/ofertas/ofertas.component";
import { AcercadeComponent } from "./view/acercade/acercade.component";

import { NgxPaginationModule } from "ngx-pagination";
import { ProductoComponent } from "./view/producto/producto.component";
import { FormsModule } from "@angular/forms";
import { EditorComponent } from './template/editor/editor.component';
import { EditorformComponent } from './template/editorform/editorform.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    TiendaComponent,
    OfertasComponent,
    AcercadeComponent,
    ProductoComponent,
    EditorComponent,
    EditorformComponent,
  ],
  imports: [NgxPaginationModule, BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
