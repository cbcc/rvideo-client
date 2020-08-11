import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
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
