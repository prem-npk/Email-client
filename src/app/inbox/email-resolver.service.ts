import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Email } from './email';
import { EmailService } from './email.service';
import { catchError } from 'rxjs';
import { EMPTY } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmailResolverService implements Resolve<Email> {
  constructor(private emailService: EmailService, private rouetr: Router) {}
  resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params;
    return this.emailService.getEmail(id).pipe(
      catchError(() => {
        this.rouetr.navigateByUrl('/inbox/not-found');
        return EMPTY;
      })
    );
  }
}
