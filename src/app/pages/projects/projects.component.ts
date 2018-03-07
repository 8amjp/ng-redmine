import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {

  title = 'プロジェクト';
  projects;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.get('/projects').subscribe(
      data => {
        this.projects = data
      },
      error => console.log(error),
      () => console.log('onCompleted')
    );
  }

}
