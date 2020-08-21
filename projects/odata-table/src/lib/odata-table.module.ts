import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OdataTableComponent } from './odata-table.component';
import { OdataFieldDirective } from './odata-field.directive';
import { OdataFieldOptionDirective } from './odata-field-option.directive';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatInputModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatMenuModule,
  MatIconModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { OptionsCellComponent } from './cells/options-cell/options-cell.component';

import { TextFilterComponent } from './filters/text-filter/text-filter.component';
import { DateFilterComponent } from './filters/date-filter/date-filter.component';

import { CellService, ColumnFilterService, DynamicTableModule } from 'material-dynamic-table';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    OdataTableComponent,
    OdataFieldDirective,
    OdataFieldOptionDirective,
    OptionsCellComponent,
    TextFilterComponent,
    DateFilterComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DynamicTableModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    OdataTableComponent,
    OdataFieldDirective,
    OdataFieldOptionDirective,
    OptionsCellComponent,
    TextFilterComponent,
    DateFilterComponent
  ]
})
export class OdataTableModule {
  constructor(private readonly cellService: CellService, private readonly columnFilterService: ColumnFilterService) {

    cellService.registerCell('options', OptionsCellComponent);

    columnFilterService.registerFilter('string', TextFilterComponent);
    columnFilterService.registerFilter('date', DateFilterComponent);
  }
}
