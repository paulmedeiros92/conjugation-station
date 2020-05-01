import { TestBed } from '@angular/core/testing';

import { ConjugateService } from './conjugate.service';

describe('ConjugateService', () => {
  let service: ConjugateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConjugateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
