import { Component, OnInit } from '@angular/core';
import { DataResponse } from '../../core/data/dataResponse';
import { Video } from '../../core/data/video';
import { FavoriteService } from '../../core/service/favorite.service';
import { LocalStorageService } from '../../core/service/local-storage.service';

@Component({
  selector: 'app-user-favorite',
  templateUrl: './user-favorite.component.html',
  styleUrls: ['./user-favorite.component.css']
})
export class UserFavoriteComponent implements OnInit {
  userId = null;
  videos: Video[];
  constructor(private favoriteService: FavoriteService) { }

  ngOnInit() {
    if (LocalStorageService.getUser() != null) {
      this.userId = LocalStorageService.getUser().id;
      this.favoriteService.findVideoByUserId(this.userId)
        .subscribe((data: DataResponse<Video[]>) => this.videos = data.data);
    }
  }

}
