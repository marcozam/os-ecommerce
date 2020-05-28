import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// Material
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
// Routing
import { DocumentsRoutingModule } from './routing/documents-routing.module';
// Componets
import {
  DocumentsPrivateLayoutComponent,
  DocumentsPublicLayoutComponent,
  MembersComponent,
  FilesComponent,
  TokenizerComponent,
  FileDialogComponent,
  FileFormComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Angular Material
    MatChipsModule,
    MatMenuModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatAutocompleteModule,
    // Routing
    DocumentsRoutingModule,
  ],
  declarations: [
    DocumentsPrivateLayoutComponent,
    DocumentsPublicLayoutComponent,
    MembersComponent,
    FileDialogComponent,
    FileFormComponent,
    FilesComponent,
    TokenizerComponent,
  ],
  entryComponents: [
    FileDialogComponent,
  ]
})
export class DocumentsModule { }
