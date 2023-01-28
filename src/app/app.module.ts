import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContactameComponent } from './componentes/contactame/contactame.component';

import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    AppComponent,
    PiePaginaComponent,
    EncabezadoComponent,
    PerfilComponent,
    HabilidadesComponent,
    NavbarComponent,
    InicioComponent,
    EducacionComponent,
    ProyectosComponent,
    ContactameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({      
      radius: 100,               
      animationDuration: 300,       
      unitsColor:"#FF5A5F",    
      unitsFontSize:"15",    
      subtitleColor:"#087E8B",
      titleColor:"#FF5A5F",
      titleFontSize:"30",
      subtitleFontSize:"20"
    }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
