import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OdataTableComponent } from './odata-table.component';
import { OdataFieldDirective } from './odata-field.directive';
import { OdataFieldOptionDirective } from './odata-field-option.directive';
import { HttpClientModule } from '@angular/common/http';
import { DynamicTableModule } from 'material-dynamic-table';
import {ODataFilter} from './odata-filter';
import { ODataDataSource } from './odata-data-source';

@NgModule({
  declarations: [
    OdataTableComponent,
    OdataFieldDirective,
    OdataFieldOptionDirective,
    //ODataDataSource
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DynamicTableModule
  ],
  exports: [
    OdataTableComponent,
    OdataFieldDirective,
    OdataFieldOptionDirective
  ]
})
export class OdataTableModule {

}
