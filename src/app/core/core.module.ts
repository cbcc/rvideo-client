import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {httpInterceptorProviders} from './interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ httpInterceptorProviders ]
})
export class CoreModule { }
