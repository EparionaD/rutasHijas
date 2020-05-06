import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DisenoComponent } from './components/proyectos/diseno.component';
import { ProduccionComponent } from './components/proyectos/produccion.component';
import { SoftwareComponent } from './components/proyectos/software.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProyectosComponent,
    NavbarComponent,
    DisenoComponent,
    ProduccionComponent,
    SoftwareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
