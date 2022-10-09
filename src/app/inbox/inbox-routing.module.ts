import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { EmailResolverService } from './email-resolver.service';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'not-found', component: NotFoundComponent },
      {
        path: ':id',
        component: EmailShowComponent,
        resolve: { email: EmailResolverService },
      }, //Colon is used to capture any variable or any string  and it is called as parameter ID.
      { path: '', component: PlaceholderComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InboxRoutingModule {}
