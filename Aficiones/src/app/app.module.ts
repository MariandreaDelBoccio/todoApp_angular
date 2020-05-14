import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaAficionesComponent } from './lista-aficiones/lista-aficiones.component';

@NgModule({
  // declara mis propios componentes
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaAficionesComponent
  ],
  // declara componentes externos
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
