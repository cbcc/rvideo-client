import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFaceComponent } from './user-face.component';

describe('UserFaceComponent', () => {
  let component: UserFaceComponent;
  let fixture: ComponentFixture<UserFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserFaceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
