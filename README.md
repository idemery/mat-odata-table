# odata-table
odata-table simplifies quering OData V4 APIs using [odata-query](https://github.com/techniq/odata-query), [odata-data-source](https://github.com/relair/odata-data-source), and [material-dynamic-table](https://github.com/relair/material-dynamic-table).

_Currently under development._

## Installation

To install dependencies mentioned above, run the following:
```
npm i odata-query material-dynamic-table @angular/material @angular/cdk  
```

To install odata-table run:
```
npm i odata-table
```

## Getting started
In your module include the following imports:
```javascript
import { CellService } from 'material-dynamic-table';
import { OdataTableModule, OdataTextCellComponent, OdataDateCellComponent } from 'odata-table';
```
add **OdataTableModule** to the imports:
```javascript
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OdataTableModule
  ],
```
register string, and date cells in the constructor:
```javascript
export class AppModule { 
  constructor(private readonly cellService: CellService) {
    cellService.registerCell('string', OdataTextCellComponent);
    cellService.registerCell('date', OdataDateCellComponent);
  }
}
```


## Usage

```html
<mat-odata-table url="https://services.odata.org/V4/OData/OData.svc/Products">
  <mat-odata-field name="Name" displayName="Name" type="string"></mat-odata-field>
  <mat-odata-field name="Description" displayName="Description" type="string"></mat-odata-field>
  <mat-odata-field name="ReleaseDate" displayName="Release Date" type="date">
    <mat-odata-field-option name="format" value="long"></mat-odata-field-option>    
  </mat-odata-field>
  <mat-odata-field name="ProductDetail.Details" displayName="Details" type="string"></mat-odata-field>
  <mat-odata-field name="Supplier.Name" displayName="Supplier" type="string"></mat-odata-field>
</mat-odata-table>
```

