import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraedsForPatientComponent } from './graeds-for-patient.component';

describe('GraedsForPatientComponent', () => {
  let component: GraedsForPatientComponent;
  let fixture: ComponentFixture<GraedsForPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraedsForPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraedsForPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
