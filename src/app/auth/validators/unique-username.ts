import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { AbstractControl, AsyncValidator, FormControl } from '@angular/forms';
import { map, catchError, of } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}
  validate = (control: AbstractControl): any => {
    const { value } = control;
    return this.authService.usernameAvailable(value).pipe(
      map((value) => {
        if (value.available) {
          return;
        }
      }),
      catchError((err) => {
        if (err.error.username) {
          return of({ noUniqueUsername: true });
        } else {
          return of({ noConnection: true });
        }
      })
    );
  };
}
