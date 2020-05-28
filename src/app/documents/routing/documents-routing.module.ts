import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  DocumentsPublicLayoutComponent,
  DocumentsPrivateLayoutComponent,
  FilesComponent,
  MembersComponent,
} from '../components';

const routes: Routes = [
  {
    path: 'me', component: DocumentsPrivateLayoutComponent, children: [
      { path: 'files', component: FilesComponent },
      { path: 'members', component: MembersComponent },
      { path: '', redirectTo: 'files', pathMatch: 'full' }
    ],
  },
  {
    path: '', component: DocumentsPublicLayoutComponent, children: [],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
