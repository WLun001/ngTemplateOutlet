import { ContentChild, Directive, Input, TemplateRef } from '@angular/core';
import { TableColumnData } from './table.component';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[cell]'
})
export class CellDirective implements TableColumnData {
  @Input() cell: string;
  @ContentChild(TemplateRef, { static: true }) template: TemplateRef<HTMLElement | any>;
}
