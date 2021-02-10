import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatsPageComponent } from './candidats-page.component';

describe('CandidatsPageComponent', () => {
  let component: CandidatsPageComponent;
  let fixture: ComponentFixture<CandidatsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
