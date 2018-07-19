import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTreatmentForPatientComponent } from './show-treatment-for-patient.component';

describe('ShowTreatmentForPatientComponent', () => {
  let component: ShowTreatmentForPatientComponent;
  let fixture: ComponentFixture<ShowTreatmentForPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTreatmentForPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTreatmentForPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
