import { Directive, Input, ContentChildren, QueryList } from '@angular/core';
import { OdataFieldOptionDirective } from './odata-field-option.directive';

@Directive({
  selector: 'mat-odata-field'
})
export class OdataFieldDirective {

  constructor() { }
  @Input() name!: string;
  @Input() displayName!: string;
  @Input() type!: string;
  @Input() hidden?: boolean;
  @ContentChildren(OdataFieldOptionDirective) options: QueryList<OdataFieldOptionDirective>;
}
