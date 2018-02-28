import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { ActivityComponent } from './activity/activity.component';
import { IssuesComponent } from './issues/issues.component';
import { TimeEntriesComponent } from './time-entries/time-entries.component';
import { NewsComponent } from './news/news.component';
import { MyComponent } from './my/my.component';
import { LoginComponent } from './login/login.component';
import { IssueFormComponent } from './issues/issue-form/issue-form.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'issues', component: IssuesComponent },
  { path: 'issues/:id', component: IssueFormComponent },
  { path: 'time-entries', component: TimeEntriesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'my', component: MyComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
