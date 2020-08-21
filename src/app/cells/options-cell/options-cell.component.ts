import { Component, Input } from '@angular/core';
import { CellComponent, ColumnConfig } from 'material-dynamic-table';

@Component({
    selector: 'ld-options-cell',
    templateUrl: './options-cell.component.html'
})
export class OptionsCellComponent implements CellComponent {
    @Input()
    column: ColumnConfig;

    @Input()
    row: any;

    constructor() {}

    buy() {
        const productName = this.row.Name;
        const price = this.row.Price;
        alert(`Bought product ${productName} for \$${price}.`);
    }
}