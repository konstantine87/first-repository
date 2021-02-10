import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAnimalsComponent } from './table-animals.component';

describe('TableAnimalsComponent', () => {
  let component: TableAnimalsComponent;
  let fixture: ComponentFixture<TableAnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAnimalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
