import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OdataTableModule, OdataTextCellComponent, OdataDateCellComponent } from 'odata-table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { CellService, ColumnFilterService } from 'material-dynamic-table';

@NgModule({
  declarations: [
    AppComponent,
    OptionsCellComponent,
    TextFilterComponent,
    DateFilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OdataTableModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [],
  entryComponents: [
    OptionsCellComponent,
    TextFilterComponent,
    DateFilterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private readonly cellService: CellService, private readonly columnFilterService: ColumnFilterService) {

    cellService.registerCell('options', OptionsCellComponent);
    cellService.registerCell('text', OdataTextCellComponent);
    cellService.registerCell('date', OdataDateCellComponent);

    columnFilterService.registerFilter('string', TextFilterComponent);
    columnFilterService.registerFilter('date', DateFilterComponent);
  }
}
