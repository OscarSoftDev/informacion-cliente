import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionBasicaComponent } from './informacion-basica/informacion-basica.component';
import { IngresoComponent } from './ingreso/ingreso.component';

const routes: Routes = [
  { path: 'ingreso', component: IngresoComponent},
  { path: 'informacion/:cliente', component: InformacionBasicaComponent},
 // { path: '**', pathMatch: 'full', redirectTo: 'ingreso'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//,{useHash:true}