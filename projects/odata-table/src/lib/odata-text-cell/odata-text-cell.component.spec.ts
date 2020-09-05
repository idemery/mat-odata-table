import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdataTextCellComponent } from './odata-text-cell.component';

describe('OdataTextCellComponent', () => {
  let component: OdataTextCellComponent;
  let fixture: ComponentFixture<OdataTextCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdataTextCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdataTextCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
