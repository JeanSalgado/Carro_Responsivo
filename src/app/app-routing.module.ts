import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
   { path: 'catalogo', component: CatalogoComponent },
{ path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
