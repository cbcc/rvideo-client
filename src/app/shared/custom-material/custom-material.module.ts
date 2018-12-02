import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatDividerModule, MatGridListModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatRadioModule, MatSnackBarModule, MatToolbarModule
} from '@angular/material';

const CUSTOM_MATERIAL = [
  MatGridListModule,
  MatButtonModule,
  MatRadioModule,
  MatListModule,
  MatDividerModule,
  MatCardModule,
  MatInputModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSnackBarModule
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
