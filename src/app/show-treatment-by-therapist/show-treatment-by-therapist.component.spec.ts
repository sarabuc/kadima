import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTreatmentByTherapistComponent } from './show-treatment-by-therapist.component';

describe('ShowTreatmentByTherapistComponent', () => {
  let component: ShowTreatmentByTherapistComponent;
  let fixture: ComponentFixture<ShowTreatmentByTherapistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTreatmentByTherapistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTreatmentByTherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
