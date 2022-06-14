import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AdminPageComponent } from './admin-page/admin-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HistorialProyectComponent } from './historial-proyect/historial-proyect.component';
import { ContainerComponent } from './container/container.component';
import { CupulaComponent } from './cupula/cupula.component';
const routes: Routes = [
  { path: 'Proyects', component: AdminPageComponent },
  { path: 'Cabañas', component: MainPageComponent },
  { path: 'Login', component: LoginPageComponent },
  { path: 'ProyectHistory', component: HistorialProyectComponent },
  { path: 'Container', component: ContainerComponent },
  { path: 'Cupula', component: CupulaComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }