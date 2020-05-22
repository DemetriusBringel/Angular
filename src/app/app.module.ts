import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TituloComponent } from './titulo/titulo.component';
import { ContadorComponent } from './contador/contador.component';
import { ExibeImagemComponent } from './exibe-imagem/exibe-imagem.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    ContadorComponent,
    ExibeImagemComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
