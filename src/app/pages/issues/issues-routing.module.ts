import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { IssuesComponent } from './issues.component';

const issuesRoutes: Routes = [{
  path: '',
  component: IssuesComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(issuesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class IssuesRoutingModule { }
