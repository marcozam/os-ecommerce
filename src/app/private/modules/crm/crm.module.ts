import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { CrmRoutingModule } from './routing/crm-routing.module';
// OSModules
import { OSCommonFormsModule } from 'app/common-forms/common-forms.module';
// Components
import * as components from './components';
import { SearchPersonaComponent } from './components/search-persona/search-persona.component';
import { HomeComponent } from './containers/home/home.component';
// Services
import { ContactoService } from 'services/http/crm';
import { PersonasService } from 'services/http/base';
import { CRMStoreModule } from 'store/crm/crm-store.module';

@NgModule({
  imports: [
    CommonModule,
    // Routing
    CrmRoutingModule,
    // OS Module
    OSCommonFormsModule,
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
    // Store
    CRMStoreModule,
  ],
  declarations: [
    components.ContactoComponent,
    components.ContactoFormComponent,
    components.DialogActionsComponent,
    components.DatosContactoComponent,
    HomeComponent,
    SearchPersonaComponent,
  ],
  providers: [
    ContactoService,
    PersonasService,
  ],
  exports: [
    components.ContactoComponent,
    SearchPersonaComponent
  ],
  entryComponents: [
    components.DialogActionsComponent,
    components.ContactoFormComponent,
  ]
})
export class CRMModule { }
