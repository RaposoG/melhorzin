import { TestBed } from '@angular/core/testing';

import { TechService } from './tech.service';

describe('TechService', () => {
  let service: TechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
