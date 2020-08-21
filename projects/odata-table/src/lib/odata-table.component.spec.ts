import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdataTableComponent } from './odata-table.component';

describe('OdataTableComponent', () => {
  let component: OdataTableComponent;
  let fixture: ComponentFixture<OdataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
