import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data } from '@angular/router';
import { Barrage } from '../../core/data/barrage';
import { DataResponse } from '../../core/data/dataResponse';
import { Favorite } from '../../core/data/favorite';
import { Video } from '../../core/data/video';
import { BarrageService } from '../../core/service/barrage.service';
import { FavoriteService } from '../../core/service/favorite.service';
import { FileService } from '../../core/service/file.service';
import { LocalStorageService } from '../../core/service/local-storage.service';
import { MessageService } from '../../core/service/message.service';
import { VideoService } from '../../core/service/video.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @Input() video: Video;
  userId = null;
  barrages: Barrage[];
  isCollect = false;
  collectBtnText = '收藏';
  barrageForm = new FormControl('', [
    Validators.maxLength(50)
  ]);

  constructor(private route: ActivatedRoute, private videoService: VideoService,
              private favoriteService: FavoriteService, private barrageService: BarrageService,
              private fileService: FileService, private messageService: MessageService) {
  }

  ngOnInit() {
    // 更新播放量
    this.videoService.updateViews(this.video.id, this.video.views + 1).subscribe((data: DataResponse<null>) => {
      if (data.status === 200) {
        this.video.views++;
      }
    });
    // 获取评论列表
    this.barrageService.findByVideoId(this.video.id).subscribe((data1: DataResponse<Barrage[]>) => {
      this.barrages = data1.data;
    });
    if (LocalStorageService.getUser() != null ) {
      this.userId = LocalStorageService.getUser().id;
      this.favoriteService.have(this.userId, this.video.id).subscribe(data => {
        this.isCollect = data;
        if (this.isCollect) {
          this.collectBtnText = '已收藏';
        } else {
          this.collectBtnText = '收藏';
        }
      });
    }
  }

  action(): void {
    if (this.userId === null) {
      this.messageService.openSnackBar('请先登录');
      return;
    }
    if (this.isCollect) {
      this.cancelCollect();
    } else {
      this.collect();
    }
  }

  collect(): void {
    const favorite = new Favorite(this.userId, this.video.id);
    this.favoriteService.save(favorite).subscribe((data: DataResponse<null>) => {
      this.messageService.openSnackBar(data.message);
      if (data.status === 200) {
        this.isCollect = true;
        this.collectBtnText = '已收藏';
      }
    });
  }

  cancelCollect(): void {
    this.favoriteService.delete(this.userId, this.video.id).subscribe((data: DataResponse<null>) => {
      this.messageService.openSnackBar(data.message);
      if (data.status === 200) {
        this.isCollect = false;
        this.collectBtnText = '收藏';
      }
    });
  }

  comment(): void {
    if (this.userId === null) {
      this.messageService.openSnackBar('请先登录再发表评论');
    }
    if (this.barrageForm.invalid) {
      return;
    }
    if (this.barrageForm.value === '') {
      return;
    }
    const barrage = new Barrage();
    barrage.userId = this.userId;
    barrage.videoId = this.video.id;
    barrage.content = this.barrageForm.value;
    this.barrageService.save(barrage).subscribe((data: DataResponse<null>) => {
      if (data.status === 200) {
        this.barrageService.findByVideoId(this.video.id).subscribe((data1: DataResponse<Barrage[]>) => {
          this.barrages = data1.data;
        });
      }
    });
  }

  like(): void {
    if (this.userId === null) {
      this.messageService.openSnackBar('请先登录');
    }
    this.videoService.updateLikes(this.video.id, this.video.likes + 1).subscribe((data: DataResponse<null>) => {
      if (data.status === 200) {
        this.video.likes++;
      }
    });
  }
}
