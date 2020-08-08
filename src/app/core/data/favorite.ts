export class Favorite {
  userId: number;
  videoId: number;

  constructor(userId: number, videoId: number) {
    this.userId = userId;
    this.videoId = videoId;
  }
}
