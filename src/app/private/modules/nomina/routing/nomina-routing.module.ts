import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Resolvers

// Containers

// Components
import * as components from '../components';

const routes: Routes = [
  { path: 'finiquito', component: components.FiniquitoComponent },
  { path: '', redirectTo: 'finiquito', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class NominaRoutingModule { }
