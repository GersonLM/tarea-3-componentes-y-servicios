import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { MedicamentosAgotadosComponent } from './components/medicamentos-agotados/medicamentos-agotados.component';
import { ModalComponentesMedicamentoComponent } from './components/modal-componentes-medicamento/modal-componentes-medicamento.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    MedicamentosAgotadosComponent,
    ModalComponentesMedicamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
