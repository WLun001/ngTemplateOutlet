import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component {
  data = this.dataService.getPeriodicElement();

  constructor(private dataService: DataService) {
  }

}
