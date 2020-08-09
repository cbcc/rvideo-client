import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDetailModalComponent } from './video-detail-modal.component';

describe('VideoDetailModalComponent', () => {
  let component: VideoDetailModalComponent;
  let fixture: ComponentFixture<VideoDetailModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoDetailModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
