import { Component, OnInit } from '@angular/core';
import { TAGS } from '../../core/data/tag';

@Component({
  selector: 'app-home-sidebar',
  templateUrl: './home-sidebar.component.html',
  styleUrls: ['./home-sidebar.component.css']
})
export class HomeSidebarComponent implements OnInit {
  tags = TAGS;

  constructor() {}

  ngOnInit() {
  }

}
