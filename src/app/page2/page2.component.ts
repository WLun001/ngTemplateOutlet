import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component {
  data = this.dataService.getTransactions();

  constructor(private dataService: DataService) {
  }
}
