import { TestBed } from '@angular/core/testing';

import { MatIconService } from './mat-icon.service';

describe('MatIconService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatIconService = TestBed.get(MatIconService);
    expect(service).toBeTruthy();
  });
});
