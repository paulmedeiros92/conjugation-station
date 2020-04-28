import { TestBed } from '@angular/core/testing';

import { TenseService } from './tense.service';

describe('TenseService', () => {
  let service: TenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
