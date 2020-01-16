import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
// Routing
import { CrmRoutingModule } from './crm-routing.module';
// OSModules
import { OSCommonFormsModule } from 'app/common-forms/common-forms.module';
import { BaseModule } from 'app/modules/base/base.module';
// Components
import { ContactoComponent } from './components/contacto/contacto.component';
import { SearchPersonaComponent } from './components/search-persona/search-persona.component';
import { DialogActionsComponent } from './components/dialog-actions/dialog-actions.component';
import { DatosContactoComponent } from './components/datos-contacto/datos-contacto.component';
import { HomeComponent } from './containers/home/home.component';
// Directives
import { NameValidatorDirective } from './directives/name-validator.directive';
// Services
import { ContactoService } from 'services/http/crm';
import { PersonasService } from 'services/http/base';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Routing
    CrmRoutingModule,
    // OS Module
    OSCommonFormsModule,
    BaseModule,
    // Material
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatProgressBarModule,
    MatSelectModule,
    MatTooltipModule,
    MatMenuModule,
    MatTabsModule,
  ],
  declarations: [
    ContactoComponent,
    SearchPersonaComponent,
    DialogActionsComponent,
    HomeComponent,
    NameValidatorDirective,
    DatosContactoComponent
  ],
  providers: [
    ContactoService,
    PersonasService,
  ],
  exports: [
    ContactoComponent,
    SearchPersonaComponent
  ],
  entryComponents: [
    DialogActionsComponent
  ]
})
export class CRMModule { }
