import { TestBed } from '@angular/core/testing';

import { PouetService } from './pouet.service';

describe('PouetService', () => {
  let service: PouetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PouetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
