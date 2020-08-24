import { Component, ContentChildren, QueryList, Input, AfterContentInit } from '@angular/core';
import { ColumnConfig } from 'material-dynamic-table';
import { HttpClient } from '@angular/common/http';
import { ODataDataSource } from './odata-data-source';
import { OdataFieldDirective } from './odata-field.directive';

@Component({
  selector: 'mat-odata-table',
  template: `
    <mdt-dynamic-table *ngIf="columns && dataSource"
      [columns]="columns"
      [dataSource]="dataSource"
      [pageSize]="pageSize ? pageSize : 10"
      [showFilters]="false">
    </mdt-dynamic-table>
  `,
  styles: [
  ]
})
export class OdataTableComponent implements AfterContentInit {

  @ContentChildren(OdataFieldDirective) fields!: QueryList<OdataFieldDirective>;

  @Input() url!: string;
  @Input() initialSort: string;
  @Input() pageSize?: number;

  columns: ColumnConfig[];
  dataSource: ODataDataSource;

  constructor(private readonly httpClient: HttpClient) {}

  ngAfterContentInit(): void {
    this.columns = [];
    this.fields.forEach(f => {

      if (!f.hidden) {
        const fld = {
          name: f.name,
          displayName: f.displayName,
          type: f.type,
          options: undefined
        };

        if (f.options && f.options.length > 0) {
          fld.options = {};
          f.options.forEach(op => {
            fld.options[op.name] = op.value;
          });
        }

        this.columns.push(fld);
      }
    });

    // if (this.url.indexOf('?') < 0) {
    //   this.url += this.makeODataUrl(this.fields);
    // }

    this.dataSource = new ODataDataSource(this.httpClient, this.url);
    this.dataSource.selectedFields = this.fields.map(f => f.name);
    if (this.initialSort) {
      this.dataSource.initialSort = [this.initialSort];
    }
  }

  public refresh(): void {
    this.dataSource.refresh();
  }

  makeODataUrl(fields: QueryList<OdataFieldDirective>): string {
    const select = fields.filter(f => f.name.split('.').length === 1);
    const expand = fields.filter(f => f.name.split('.').length > 1);

    let url: string;

    if (select && select.length > 0) {
      url = '$select=' + select.map(f => f.name).join(',');
    }

    if (expand && expand.length > 0) {
      if (url) {
        url += '&$expand=';
      } else {
        url = '$expand=';
      }

      for (const fld of expand) {
        const root = fld.name.split('.')[0];
        const rootEx = `${root}($select=`;
        if (url.indexOf(rootEx) > -1) {
          const index = url.indexOf(rootEx) + rootEx.length;
          url = `${url.slice(0, index)}${fld.name.split('.')[1]},${url.slice(index)}`;
        } else {
          url += `${root}($select=${fld.name.split('.')[1]}),`;
        }
      }
    }

    if (url && url[url.length - 1] === ',') {
      url = url.substr(0, url.length - 1);
    }

    return '?' + url;
  }
}
