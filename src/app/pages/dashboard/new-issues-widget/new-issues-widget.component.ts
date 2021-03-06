import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { ApiService } from '../../../services/api.service';
import { StyleService } from '../../../services/style.service';

@Component({
  selector: 'new-issues-widget',
  templateUrl: './new-issues-widget.component.html'
})
export class NewIssuesWidgetComponent implements OnInit {

  @Input() project_id: number;
  data: any[] = [];
  items: any[];

  constructor(
    private api: ApiService,
    private style: StyleService
  ) { }

  ngOnInit(): void {
    this.api.get('/trackers').subscribe(
      response => {
        this.items = response.trackers;
        this.items.forEach(function(item) {
          item.param = { tracker_id: item.id };
          let style = this.style.tracker[item.id] || this.style.default;
          this.data.push({
            context: style.context,
            icon: style.icon,
            number: 0,
            text: item.name,
            link: ['/'],
            issues: []
          });
        }.bind(this));
      },
      error => console.log(error),
      () => {
        this.getData();
      }
    );
  }

  getData(): void {
    let today = moment().format('YYYY-MM-DD');
    this.items.forEach(function(item, i) {
      this.api.get('/issues', Object.assign({ status_id: '*', created_on: today }, { project_id: this.project_id }, item.param )).subscribe(
        response => {
          this.data[i].number = response['total_count'];
          this.data[i].issues = response['issues'];
        },
        error => console.log(error),
        () => {}
      );
    }.bind(this));
  }

}
