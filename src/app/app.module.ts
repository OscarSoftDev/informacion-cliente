import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { InformacionBasicaComponent } from './informacion-basica/informacion-basica.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresoComponent,
    InformacionBasicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
