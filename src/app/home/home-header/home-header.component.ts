import { Component, OnInit } from '@angular/core';
import { TAGS } from '../../core/data/tag';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent implements OnInit {
  tags = TAGS;

  constructor() { }

  ngOnInit() {
  }

}
