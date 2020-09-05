import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OdataTableComponent } from './odata-table.component';
import { OdataFieldDirective } from './odata-field.directive';
import { OdataFieldOptionDirective } from './odata-field-option.directive';
import { HttpClientModule } from '@angular/common/http';
import { DynamicTableModule } from 'material-dynamic-table';
import { OdataTextCellComponent } from './odata-text-cell/odata-text-cell.component';
import { OdataDateCellComponent } from './odata-date-cell/odata-date-cell.component';

@NgModule({
  declarations: [
    OdataTableComponent,
    OdataFieldDirective,
    OdataFieldOptionDirective,
    OdataTextCellComponent,
    OdataDateCellComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DynamicTableModule
  ],
  exports: [
    OdataTableComponent,
    OdataFieldDirective,
    OdataFieldOptionDirective,
    OdataTextCellComponent,
    OdataDateCellComponent
  ]
})
export class OdataTableModule {

}
