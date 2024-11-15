import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { CubosMarcasComponent } from './components/cubos-marcas/cubos-marcas.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprasComponent } from './components/compras/compras.component';
import { ComprarComponent } from './components/comprar/comprar.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "detalles/:id", component: DetallesComponent},
  {path: "cubosmarca/:marca", component: CubosMarcasComponent},
  {path: "login", component: LoginComponent},
  {path: "perfil", component: PerfilComponent},
  {path: "compras", component: ComprasComponent},
  {path: "comprar", component: ComprarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
