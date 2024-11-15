import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ServiceCubos } from './services/Service.Cubos';
import { MenuComponent } from './components/menu/menu.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { CubosMarcasComponent } from './components/cubos-marcas/cubos-marcas.component';
import { LoginComponent } from './components/login/login.component';
import { ServiceLogin } from './services/Login';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprasComponent } from './components/compras/compras.component';
import { ComprarComponent } from './components/comprar/comprar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    DetallesComponent,
    CubosMarcasComponent,
    LoginComponent,
    PerfilComponent,
    ComprasComponent,
    ComprarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient(), ServiceCubos, ServiceLogin],
  bootstrap: [AppComponent]
})
export class AppModule { }
