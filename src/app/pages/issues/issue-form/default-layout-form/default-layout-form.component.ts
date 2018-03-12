import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'default-layout-form',
  templateUrl: './default-layout-form.component.html'
})
export class DefaultLayoutFormComponent implements OnInit {

  @Input() issueFormGroup: FormGroup;
  datetimeOptions = {
    format: 'YYYY-MM-DDTHH:mm:ss'
  }
  dateOptions = {
    format: 'YYYY/MM/DD'
  }

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
  }

}
