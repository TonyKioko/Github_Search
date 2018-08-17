import { TestBed, inject } from '@angular/core/testing';

import { GithubprofileService } from './githubprofile.service';

describe('GithubprofileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubprofileService]
    });
  });

  it('should be created', inject([GithubprofileService], (service: GithubprofileService) => {
    expect(service).toBeTruthy();
  }));
});
