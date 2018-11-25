import { TestBed, inject } from '@angular/core/testing';

import { ProgressServiceService } from './progress-service.service';

describe('ProgressServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgressServiceService]
    });
  });

  it('should be created', inject([ProgressServiceService], (service: ProgressServiceService) => {
    expect(service).toBeTruthy();
  }));
});
