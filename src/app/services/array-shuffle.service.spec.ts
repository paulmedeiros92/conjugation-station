import { TestBed } from '@angular/core/testing';

import { ArrayShuffleService } from './array-shuffle.service';

describe('ArrayShuffleService', () => {
  let service: ArrayShuffleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayShuffleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
