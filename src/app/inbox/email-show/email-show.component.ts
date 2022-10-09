import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../email.service';
import { switchMap } from 'rxjs';
import { Email } from '../email';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.css'],
})
export class EmailShowComponent implements OnInit {
  email: Email;

  constructor(
    private route: ActivatedRoute,
    private emailService: EmailService
  ) {
    this.email = route.snapshot.data['email']; //The subscribe is not going to execute before we rendering.
    this.route.data.subscribe(({ email }) => {
      this.email = email;
    });
  }

  ngOnInit() {
    //this.route.params.subscribe(({ id }) => {
    //params is used to take the id straight forward
    //this.emailService.getEmail(id).subscribe((email) => {
    //console.log(email);
    //});
    //});
    //   this.route.params
    //     .pipe(
    //       switchMap(({ id }) => {
    //         return this.emailService.getEmail(id);
    //       })
    //     )
    //     .subscribe((email) => {
    //       this.email = email;
    //     });
  }
}
