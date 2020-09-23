import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscripcionComponent } from './components';
import { SchoolLayoutComponent } from './layouts';

const routes: Routes = [
  {
    path: '',
    component: SchoolLayoutComponent,
    children: [
      { path: 'inscripcion', component: InscripcionComponent, data: { title: 'Inscripcion' } },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
