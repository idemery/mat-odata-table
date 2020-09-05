import { Component, OnInit, Input } from '@angular/core';
import { CellComponent, ColumnConfig } from 'material-dynamic-table';

@Component({
  selector: 'mat-odata-text-cell',
  template: `{{text}}`
})
export class OdataTextCellComponent implements CellComponent, OnInit {

  constructor() { }

  @Input()
  column: ColumnConfig;

  @Input()
  row: any;

  text: string;

  ngOnInit(): void {

    if (!this.row || !this.column || !this.column.name) {
      return;
    }

    if (this.column.name.indexOf('.') < 0) {
      this.text = this.row[this.column.name];
      return;
    }

    const expands = this.column.name.split('.');
    let obj = this.row;
    for (const ex of expands) {
      obj = obj[ex];
    }

    this.text = obj;
  }

}
