import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../../../core/data/video';
import { FileService } from '../../../core/service/file.service';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {
  @Input() video: Video;

  constructor(private fileService: FileService) { }

  ngOnInit() {
  }

}
