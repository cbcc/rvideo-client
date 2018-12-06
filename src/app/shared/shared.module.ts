import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomMaterialModule } from './custom-material/custom-material.module';

const SHARED_MODULE = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  CustomMaterialModule
];

@NgModule({
  declarations: [],
  imports: [
    SHARED_MODULE
  ],
  exports:  [
    SHARED_MODULE
  ]
})
export class SharedModule { }
