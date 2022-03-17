import { TestBed } from '@angular/core/testing';

import { ResetpwService } from './resetpw.service';

describe('ResetpwService', () => {
  let service: ResetpwService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResetpwService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
