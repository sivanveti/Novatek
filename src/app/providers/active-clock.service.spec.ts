import { TestBed } from '@angular/core/testing';

import { ActiveClockService } from './active-clock.service';

describe('ActiveClockService', () => {
  let service: ActiveClockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveClockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
