import { Component } from '@angular/core';
import { MatIconService } from './core/service/mat-icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rvideo-client';

  constructor(private matIconService: MatIconService) {
    this.matIconService.registry();
  }
}
