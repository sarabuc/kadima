import { TestBed, inject } from '@angular/core/testing';

import { ReturnMessageService } from './return-message.service';

describe('ReturnMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReturnMessageService]
    });
  });

  it('should be created', inject([ReturnMessageService], (service: ReturnMessageService) => {
    expect(service).toBeTruthy();
  }));
});
