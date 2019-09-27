import { environment } from 'environments/environment';
// Ng
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule, Title, DomSanitizer } from '@angular/platform-browser';
import localeESMX from '@angular/common/locales/es-MX';
// Tokens
import { BASE_URL } from 'services/http';
// Material Modules
import { MatIconRegistry } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
// Material Tokens for Date format
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
// Store
import { RootStoreModule } from 'ngrx-store/root-store.module';
// Routing
import { routing } from './app.routing';
// Componentes
import { AppComponent } from './app.component';

import { LayoutsModule } from './layouts/layouts.module';

registerLocaleData(localeESMX);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    routing,
    BrowserAnimationsModule,
    HttpClientModule,
    // Store
    RootStoreModule,
    // Angular Material
    MatDialogModule,
    MatSnackBarModule,
    LayoutsModule
  ],
  exports: [],
  providers: [
    Title,
    { provide: LOCALE_ID, useValue: 'es-MX'},
    { provide: MAT_DATE_LOCALE, useValue: 'es-MX'},
    { provide: BASE_URL, useValue: environment.webServiceURL },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
