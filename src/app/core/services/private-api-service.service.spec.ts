import { TestBed } from '@angular/core/testing';

import { PrivateApiServiceService } from './private-api-service.service';

describe('PrivateApiServiceService', () => {
  let service: PrivateApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivateApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
