import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OdataTableModule, OdataTableComponent, OptionsCellComponent, TextFilterComponent, DateFilterComponent } from 'odata-table';
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

@NgModule({
  declarations: [
    AppComponent
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
export class AppModule { }
