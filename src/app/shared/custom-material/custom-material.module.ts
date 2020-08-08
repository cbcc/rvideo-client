import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatDividerModule, MatGridListModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatProgressBarModule, MatRadioModule, MatSelectModule,
  MatSnackBarModule, MatToolbarModule
} from '@angular/material';
import { MatTableModule } from '@angular/material/table';

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
  MatSnackBarModule,
  MatProgressBarModule,
  MatSelectModule,
  MatTableModule
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
export class CustomMaterialModule {
}
