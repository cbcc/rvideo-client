import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatDividerModule, MatGridListModule,
  MatInputModule, MatListModule, MatMenuModule, MatRadioModule
} from '@angular/material';

const CUSTOM_MATERIAL = [
  MatGridListModule,
  MatButtonModule,
  MatRadioModule,
  MatListModule,
  MatDividerModule,
  MatCardModule,
  MatInputModule,
  MatMenuModule
];

@NgModule({
  declarations: [],
  imports: [
    CUSTOM_MATERIAL,
  ],
  exports: [
    CUSTOM_MATERIAL
  ]
})
export class CustomMaterialModule { }
