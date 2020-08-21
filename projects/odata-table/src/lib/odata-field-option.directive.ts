import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'mat-odata-field-option'
})
export class OdataFieldOptionDirective {

  constructor() { }
  @Input() name!: string;
  @Input() value!: string;
}
