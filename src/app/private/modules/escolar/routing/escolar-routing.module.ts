import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Resolvers

// Containers
import * as containers from '../containers';

const routes: Routes = [
  { path: 'familia', component: containers.FamiliaComponent },
  { path: 'alumno', component: containers.AlumnoComponent },
  { path: 'tutor', component: containers.TutorComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class EscolarRoutingModule { }
