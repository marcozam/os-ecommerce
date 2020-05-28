import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthLayoutComponent, LoginComponent } from './components';

const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      { path: 'login', component: LoginComponent, data: { title: 'Iniciar Session' } },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
