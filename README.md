# mat-odata-table
Material OData Table simplifies quering OData V4 APIs using [odata-query](https://github.com/techniq/odata-query), [odata-data-source](https://github.com/relair/odata-data-source), and [material-dynamic-table](https://github.com/relair/material-dynamic-table).

_Currently under development._

## Usage

```html
<mat-odata-table url="https://services.odata.org/V4/OData/OData.svc/Products">
  <mat-odata-field name="Name" displayName="Name" type="text"></mat-odata-field>
  <mat-odata-field name="Description" displayName="Description" type="text"></mat-odata-field>
  <mat-odata-field name="ReleaseDate" displayName="Release Date" type="date">
    <mat-odata-field-option name="format" value="long"></mat-odata-field-option>    
  </mat-odata-field>
  <mat-odata-field name="ProductDetail.Details" displayName="Details" type="text"></mat-odata-field>
  <mat-odata-field name="Supplier.Name" displayName="Supplier" type="text"></mat-odata-field>
</mat-odata-table>
```

