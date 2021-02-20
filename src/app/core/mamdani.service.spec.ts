import { TestBed } from '@angular/core/testing';

import { MamdaniService } from './mamdani.service';

describe('MamdaniService', () => {
  let service: MamdaniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MamdaniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
