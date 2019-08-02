import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// NgRx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// Store
import { reducers } from './reducers';
import { effects } from './effects';
// Services
import { services } from 'services/http/productos';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('products', { ...reducers }),
    EffectsModule.forFeature([...effects])
  ],
  providers: [
    ...services
  ],
  declarations: []
})
export class ProductosStoreModule { }


function getApplicants() {
  return store.Application.Applicants;
}

function getBisApplicant() {
  return getApplicants().filter(a => a.ApplicantType === 1);
}


const store = {
  Application: {
    Applicants: [
      { ApplicantType: 1 },
      { ApplicantType: 2 }
    ]
  },
  productos: [
    { id: 1 }
  ]
}
