import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  TemplateRef
} from '@angular/core';
import { CellDirective } from './cell.directive';

export interface TableColumnData {
  cell: string;
  template?: TemplateRef<HTMLElement | any>;
}

function mergeArrayObjects<T, K extends keyof T>(s1: T[], s2: T[], key: K): T[] {
  return s1.map((item, i) => {
    if (item[key] === s2[i][key]) {
      // merging two objects
      return Object.assign({}, item, s2[i]);
    }
  });
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T> implements OnInit, AfterViewInit {
  @ContentChildren(CellDirective) cells: QueryList<CellDirective>;
  @Input() dataSource: T[];
  displayColumns: string[];
  columns: TableColumnData[] = [];

  constructor(private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.cells.forEach(c => this.columns.push({ ...c }));
    this.displayColumns = [...this.columns.map(x => x.cell)];
    this.cdRef.detectChanges();
  }


}
