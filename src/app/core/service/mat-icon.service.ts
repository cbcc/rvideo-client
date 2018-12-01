import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MatIconService {

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {}

  registry() {
    this.iconRegistry.addSvgIcon(
      'person',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icon/baseline-person-24px.svg'));
    this.iconRegistry.addSvgIcon(
      'view-module',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/icon/baseline-view_module-24px.svg'));
  }
}
