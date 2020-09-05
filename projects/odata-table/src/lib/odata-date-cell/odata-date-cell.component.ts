import { Component, OnInit, Input } from '@angular/core';
import { CellComponent, ColumnConfig } from 'material-dynamic-table';

@Component({
  selector: 'mat-odata-date-cell',
  template: `{{result | date: format}}`
})
export class OdataDateCellComponent implements OnInit {

  constructor() { }

  @Input()
  column: ColumnConfig;

  @Input()
  row: any;

  result: any;

  format = 'medium';

  ngOnInit(): void {
    if (!this.row || !this.column || !this.column.name) {
      return;
    }

    if (this.column.name.indexOf('.') < 0) {
      this.result = this.row[this.column.name];
      return;
    }

    const expands = this.column.name.split('.');
    let obj = this.row;
    for (const ex of expands) {
      obj = obj[ex];
    }

    this.result = obj;

    if (this.column.options?.format) {
      this.format = this.column.options.format;
    }
  }

}
