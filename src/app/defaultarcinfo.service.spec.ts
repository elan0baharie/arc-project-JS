import { TestBed, inject } from '@angular/core/testing';

import { DefaultarcinfoService } from './defaultarcinfo.service';

describe('DefaultarcinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefaultarcinfoService]
    });
  });

  it('should be created', inject([DefaultarcinfoService], (service: DefaultarcinfoService) => {
    expect(service).toBeTruthy();
  }));
});
