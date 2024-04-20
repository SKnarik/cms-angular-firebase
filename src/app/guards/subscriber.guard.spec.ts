import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { SubscriberGuard } from './subscriber.guard';

describe('SubscriberGuard', () => {
  let executeGuard: CanActivateFn;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    const guard = TestBed.inject(SubscriberGuard);
    executeGuard = guard.canActivate.bind(guard);
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
