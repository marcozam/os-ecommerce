import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule, Title, DomSanitizer } from '@angular/platform-browser';
import localeESMX from '@angular/common/locales/es-MX';

// Material Modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
// Material Tokens for Date format
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
// Store
import { RootStoreModule } from './root-store/root-store.module';
// Routing
import { routing } from './app.routing';
// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// Base Components
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
// Auth Module
import { PublicComponent } from './layouts/public/public.component';
import { SecureComponent } from './layouts/secure/secure.component';

registerLocaleData(localeESMX);

@NgModule({
  declarations: [
    AppComponent,
    // Base components
    DialogBoxComponent,
    LoginComponent,
    PageNotFoundComponent,
    PublicComponent,
    SecureComponent
  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    HttpClientModule,
    // Store
    RootStoreModule,
    // Angular Material
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  exports: [],
  entryComponents: [
    DialogBoxComponent
  ],
  providers: [
    Title,
    { provide: LOCALE_ID, useValue: 'es-MX'},
    { provide: MAT_DATE_LOCALE, useValue: 'es-MX'},
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
