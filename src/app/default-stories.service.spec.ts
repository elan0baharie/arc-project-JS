import { TestBed, inject } from '@angular/core/testing';

import { DefaultStoriesService } from './default-stories.service';

describe('DefaultStoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefaultStoriesService]
    });
  });

  it('should be created', inject([DefaultStoriesService], (service: DefaultStoriesService) => {
    expect(service).toBeTruthy();
  }));
});
