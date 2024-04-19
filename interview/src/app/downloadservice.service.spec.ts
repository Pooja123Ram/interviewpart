import { TestBed } from '@angular/core/testing';

import { DownloadserviceService } from './downloadservice.service';

describe('DownloadserviceService', () => {
  let service: DownloadserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
