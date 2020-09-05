import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdataDateCellComponent } from './odata-date-cell.component';

describe('OdataDateCellComponent', () => {
  let component: OdataDateCellComponent;
  let fixture: ComponentFixture<OdataDateCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdataDateCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdataDateCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
