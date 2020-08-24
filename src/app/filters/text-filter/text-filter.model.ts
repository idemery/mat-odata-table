import { ODataFilter } from 'odata-table';

export class TextFilter implements ODataFilter {
    value: string;

    public constructor(private readonly column: string) {
        this.value = '';
    }
    
    getFilter(): object {
        const filter = {};

        filter[this.column] = { contains: this.value };
        
        return filter;
    }
}