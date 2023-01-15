import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactameComponent } from './componentes/contactame/contactame.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

const routes: Routes = [
  {path:'inicio', component: InicioComponent},
  {path:'proyectos', component: ProyectosComponent},
  {path:'contactame', component: ContactameComponent},
  {path:'educacion', component: EducacionComponent},  
  {path:'**', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
