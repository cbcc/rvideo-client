import { TestBed } from '@angular/core/testing';

import { BarrageService } from './barrage.service';

describe('BarrageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BarrageService = TestBed.get(BarrageService);
    expect(service).toBeTruthy();
  });
});
