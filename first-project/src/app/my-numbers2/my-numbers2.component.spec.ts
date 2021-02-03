import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNumbers2Component } from './my-numbers2.component';

describe('MyNumbers2Component', () => {
  let component: MyNumbers2Component;
  let fixture: ComponentFixture<MyNumbers2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyNumbers2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNumbers2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
