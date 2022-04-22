import { TestBed } from '@angular/core/testing';

import { HeroesDetaillGuard } from './heroes-detail.guard';

describe('HeroesDetaillGuard', () => {
  let guard: HeroesDetaillGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HeroesDetaillGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
