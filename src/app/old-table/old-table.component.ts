import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-old-table',
  templateUrl: './old-table.component.html',
  styleUrls: ['./old-table.component.scss']
})
export class OldTableComponent<T> {
  @Input() dataSource: T[];
  @Input() displayColumns: string[];
  @Input() case = 1;
}
