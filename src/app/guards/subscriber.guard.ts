import { Injectable } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AfService } from '../providers/af.service';
import { map, take, tap } from 'rxjs/operators';

@Injectable()
export class SubscriberGuard {
  constructor(private af: AfService) {}
  canActivate: CanActivateFn = (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean>  | boolean => {
    return this.af.user$.pipe(
      take(1),
      map(user => user && user.roles.subscriber ? true : false),
      tap ( isAdmin => {
        if (!isAdmin) {
          console.error("Access denied - Subscribers only allowed")
        }
      })
    )
  }
}
