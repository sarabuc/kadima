import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTreatmentForTherapistComponent } from './show-treatment-for-therapist.component';

describe('ShowTreatmentForTherapistComponent', () => {
  let component: ShowTreatmentForTherapistComponent;
  let fixture: ComponentFixture<ShowTreatmentForTherapistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTreatmentForTherapistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTreatmentForTherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
