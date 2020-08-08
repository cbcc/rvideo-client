import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBottomComponent } from './video-bottom.component';

describe('VideoBottomComponent', () => {
  let component: VideoBottomComponent;
  let fixture: ComponentFixture<VideoBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
