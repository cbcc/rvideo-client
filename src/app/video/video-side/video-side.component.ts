import { Component, Input, OnInit } from '@angular/core';
import { Barrage } from '../../core/data/barrage';

@Component({
  selector: 'app-video-side',
  templateUrl: './video-side.component.html',
  styleUrls: ['./video-side.component.css']
})
export class VideoSideComponent implements OnInit {
  @Input() barrages: Barrage[];

  constructor() { }

  ngOnInit() {
  }

}
